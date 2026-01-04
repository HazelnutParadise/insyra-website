package main

import (
	"encoding/json"
	"html"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"backend/downloadAPI"

	"github.com/gin-gonic/gin"
)

// This server extends the existing backend to:
// - load frontend locale files (frontend/src/locales)
// - expose /p/:page?lang=... which returns an HTML page whose <title>, h1, h2
//   are injected on the server and which also injects window.__INITIAL_MESSAGES
//   (the localized messages object) so the client Vue app can initialize without flashing.
// - keep existing routes (/ , /navbar, /download/:file) and static asset serving.
//
// Notes:
// - Locale parsing here is pragmatic and intentionally simple: it looks for `export const <Name> = { ... }`
//   in JS files under frontend/src/locales/<lang>/*.js and attempts to convert the object literal to JSON.
//   It's not a full JS parser but works for the project's simple locale files structure.
// - To ensure the client bundle paths and other assets match your build, this handler reads the project's
//   built index.html (./frontend/dist/index.html) and injects the head/h1/h2 + initial messages into it.
//   That keeps the same references to static bundles as your built SPA.

var (
	// messages[langKey][exportName] = parsed object
	messages = map[string]map[string]map[string]any{}

	// baseIndexHTML holds the built index.html content (if available)
	baseIndexHTML string
)

// Regex to capture export const NAME = { ... };
// This is a pragmatic regex for the project's locale files and expects the object literal to be balanced in braces.
// We'll capture up to the terminating `};` for that export.
var exportRegexp = regexp.MustCompile(`export\s+const\s+([A-Za-z0-9_]+)\s*=\s*({[\s\S]*?})\s*;`)

// Very small helper regexes for JS -> JSON naive conversion
var (
	singleQuoteRegexp = regexp.MustCompile(`'`)
	trailingCommaRe   = regexp.MustCompile(`,(\s*[\]}])`)
	unquotedKeyRe     = regexp.MustCompile(`([\{\s,])([A-Za-z0-9_]+)\s*:`) // matches unquoted keys like key:
	trueFalseNullRe   = regexp.MustCompile(`\b(undefined)\b`)              // not used but placeholder
)

// tryLoadIndex attempts to read frontend/dist/index.html (or frontend/index.html fallback)
func tryLoadIndex() string {
	cwd, _ := os.Getwd()

	pathsToTry := []string{
		filepath.Join(cwd, "frontend", "dist", "index.html"),
		filepath.Join(cwd, "frontend", "index.html"),
	}

	for _, p := range pathsToTry {
		if _, err := os.Stat(p); err == nil {
			b, err := ioutil.ReadFile(p)
			if err == nil {
				log.Printf("Loaded index file from %s\n", p)
				return string(b)
			}
		}
	}
	log.Printf("No built index.html found in expected locations; server-rendered /p/:page will use a minimal template\n")
	return ""
}

// loadLocales walks frontend/src/locales and attempts to parse JS exports into JSON objects.
// It fills the global messages map keyed by human-friendly language keys used by the frontend:
// "English" and "繁體中文".
func loadLocales() {
	cwd, _ := os.Getwd()
	// possible paths where frontend locales might live
	localeDirs := []string{
		filepath.Join(cwd, "frontend", "src", "locales"),
		filepath.Join(cwd, "frontend", "locales"),
	}

	var base string
	for _, d := range localeDirs {
		if fi, err := os.Stat(d); err == nil && fi.IsDir() {
			base = d
			break
		}
	}
	if base == "" {
		log.Printf("Locale directory not found; skipping locale load\n")
		return
	}

	entries, err := ioutil.ReadDir(base)
	if err != nil {
		log.Printf("Error reading locales dir: %v\n", err)
		return
	}

	for _, e := range entries {
		// we expect directories like 'eng' and 'zh-TW'
		if !e.IsDir() {
			continue
		}
		dirName := e.Name()
		langKey := "English"
		if strings.Contains(strings.ToLower(dirName), "zh") || strings.Contains(strings.ToLower(dirName), "tw") {
			langKey = "繁體中文"
		}
		if messages[langKey] == nil {
			messages[langKey] = map[string]map[string]any{}
		}
		subdir := filepath.Join(base, dirName)
		files, err := ioutil.ReadDir(subdir)
		if err != nil {
			continue
		}
		for _, f := range files {
			if f.IsDir() || !strings.HasSuffix(f.Name(), ".js") {
				continue
			}
			path := filepath.Join(subdir, f.Name())
			b, err := ioutil.ReadFile(path)
			if err != nil {
				continue
			}
			text := string(b)
			matches := exportRegexp.FindAllStringSubmatch(text, -1)
			for _, m := range matches {
				name := m[1]
				objText := m[2]
				jsonText := jsObjectToJSON(objText)
				var obj map[string]any
				if err := json.Unmarshal([]byte(jsonText), &obj); err != nil {
					// Log parse failure but continue; some locale files may be complex
					log.Printf("Failed to parse %s export %s: %v\n--- raw object ---\n%s\n--- jsonText ---\n%s\n", path, name, err, objText, jsonText)
					continue
				}
				messages[langKey][name] = obj
			}
		}
	}
	log.Printf("Locales loaded: languages=%d\n", len(messages))
}

// jsObjectToJSON performs a naive conversion from a JS object literal to JSON.
// It handles simple cases found in locale files: single quotes, unquoted keys, and trailing commas.
// This is not a full JS parser; for complex files you should pre-build JSON at build time.
func jsObjectToJSON(js string) string {
	// Remove leading/trailing whitespace
	s := strings.TrimSpace(js)
	// Replace newlines with spaces to simplify regex operations (preserve escaped newline sequences)
	s = strings.ReplaceAll(s, "\r\n", "\n")
	// Replace single quotes with double quotes (locale files generally use double quotes, but just in case)
	s = singleQuoteRegexp.ReplaceAllString(s, `"`)

	// Remove comments (simple single-line // comments)
	lineComment := regexp.MustCompile(`//.*`)
	s = lineComment.ReplaceAllString(s, "")

	// Add quotes around unquoted keys: { key: -> { "key":
	s = unquotedKeyRe.ReplaceAllString(s, `$1"$2":`)

	// Remove trailing commas before } or ]
	s = trailingCommaRe.ReplaceAllString(s, "$1")

	// Ensure true/false/null are lower-case (they usually are)
	// No additional changes needed for boolean/null.

	// The object should be valid JSON now (for our simple locale files)
	return s
}

// findLangMapForRequest maps incoming lang parameter or Accept-Language to our language keys.
func findLangKey(param string, r *http.Request) string {
	if param != "" {
		p := strings.ToLower(param)
		if strings.Contains(p, "zh") || strings.Contains(p, "tw") || strings.Contains(p, "繁") {
			return "繁體中文"
		}
		return "English"
	}
	// fallback to Accept-Language
	al := r.Header.Get("Accept-Language")
	if strings.Contains(strings.ToLower(al), "zh") {
		return "繁體中文"
	}
	return "English"
}

// pageHandler serves /p/:page and injects server-side title/h1/h2 and window.__INITIAL_MESSAGES
func pageHandler(c *gin.Context) {
	page := c.Param("page")
	if page == "" {
		// allow ?page= fallback
		page = c.Query("page")
	}
	if page == "" {
		page = "Main"
	}
	langParam := c.Query("lang")
	langKey := findLangKey(langParam, c.Request)
	langMap, ok := messages[langKey]
	if !ok {
		// fallback to English if nothing loaded
		langKey = "English"
		langMap = messages[langKey]
	}
	// pageMap may contain entries like Title/H1/H2 in different export names.
	// Our frontend uses keys like siteTitle, pageTitle, and per-page exports (Main, Features, ...)
	// We'll attempt to extract a few common fields:
	var title string
	var h1 string
	var h2 string

	// 1) If a page-level export exists (e.g., langMap["Features"]) and it contains title/h1/h2 keys, use them.
	if pageObj, ok := langMap[page]; ok {
		// pageObj is map[string]any
		if v, ok := pageObj["title"]; ok {
			title = toString(v)
		}
		if v, ok := pageObj["h1"]; ok {
			h1 = toString(v)
		}
		if v, ok := pageObj["h2"]; ok {
			h2 = toString(v)
		}
		// some page objects may have nested structures; try common nested keys
		if title == "" {
			if v, ok := pageObj["titleText"]; ok {
				title = toString(v)
			}
		}
	}

	// 2) If not present, try pageTitle export (e.g., pageTitle[pageKey])
	if title == "" {
		if pt, ok := langMap["pageTitle"]; ok {
			// pt is already a map[string]any in our messages structure,
			// so no type assertion is required; just index it directly.
			if v, ok := pt[page]; ok {
				title = toString(v)
			}
		}
	}

	// 3) If still empty, try siteTitle and combine
	if title == "" {
		siteTitle := ""
		if st, ok := langMap["siteTitle"]; ok {
			siteTitle = toString(st)
		}
		if siteTitle == "" {
			siteTitle = "Insyra"
		}
		title = siteTitle
	}

	// 4) As h1/h2 fallback, try navbar titles or use generic
	if h1 == "" {
		if nm, ok := langMap["navbar"]; ok {
			// try to use navbar.main as the h1 for main page
			if v, ok := nm["main"]; ok {
				h1 = toString(v)
			}
		}
	}
	if h1 == "" {
		h1 = title // fallback
	}
	if h2 == "" {
		h2 = ""
	}

	// Marshal the entire language map to JSON and inject it as initial messages.
	// Note: for large locales you may want to only inject a subset.
	j, err := json.Marshal(langMap)
	if err != nil {
		log.Printf("failed to marshal langMap: %v\n", err)
		j = []byte("{}")
	}

	// If we have a built index.html, reuse its layout and inject title/h1/h2 and initial messages.
	if baseIndexHTML != "" {
		out := baseIndexHTML
		// Replace <title>...</title>
		out = replaceTitle(out, title)
		// Inject a header with h1/h2 immediately after <body> tag
		out = injectHeaderBody(out, h1, h2)
		// Inject initial messages before </body>
		out = injectInitialMessages(out, j, langKey)
		c.Data(http.StatusOK, "text/html; charset=utf-8", []byte(out))
		return
	}

	// Otherwise fall back to a minimal template.
	minHTML := `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8"/>
  <title>` + html.EscapeString(title) + `</title>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="description" content="` + html.EscapeString(h2) + `">
</head>
<body>
  <header>
    <h1>` + html.EscapeString(h1) + `</h1>
    <h2>` + html.EscapeString(h2) + `</h2>
  </header>
  <div id="app"></div>
  <script>window.__INITIAL_MESSAGES = ` + string(j) + `; window.__INITIAL_LANG = "` + html.EscapeString(langKey) + `";</script>
  <script src="/assets/js/app.bundle.js"></script>
</body>
</html>`
	c.Data(http.StatusOK, "text/html; charset=utf-8", []byte(minHTML))
}

// replaceTitle replaces the first <title>...</title> occurrence in htmlStr with the provided title.
// If no <title> tag exists, it inserts one inside <head>.
func replaceTitle(htmlStr, title string) string {
	titleTagRe := regexp.MustCompile(`(?is)<title[^>]*>.*?</title>`)
	newTitle := "<title>" + html.EscapeString(title) + "</title>"
	if titleTagRe.MatchString(htmlStr) {
		return titleTagRe.ReplaceAllString(htmlStr, newTitle)
	}
	// insert into head
	headRe := regexp.MustCompile(`(?is)<head[^>]*>`)
	return headRe.ReplaceAllString(htmlStr, "${0}\n"+newTitle+"\n")
}

// injectHeaderBody inserts a simple header HTML (h1/h2) right after the opening <body> tag.
// If <body> not found, it prepends the header.
func injectHeaderBody(htmlStr, h1, h2 string) string {
	bodyRe := regexp.MustCompile(`(?is)<body[^>]*>`)
	headerHTML := "\n<header>\n  <h1>" + html.EscapeString(h1) + "</h1>\n  <h2>" + html.EscapeString(h2) + "</h2>\n</header>\n"
	if bodyRe.MatchString(htmlStr) {
		return bodyRe.ReplaceAllString(htmlStr, "${0}\n"+headerHTML)
	}
	return headerHTML + htmlStr
}

// injectInitialMessages inserts a script tag with the given JSON bytes and lang before </body>.
// If </body> not found, append at the end.
func injectInitialMessages(htmlStr string, jsonBytes []byte, lang string) string {
	script := "\n<script>window.__INITIAL_MESSAGES = " + string(jsonBytes) + "; window.__INITIAL_LANG = \"" + html.EscapeString(lang) + "\";</script>\n"
	bodyCloseRe := regexp.MustCompile(`(?is)</body>`)
	if bodyCloseRe.MatchString(htmlStr) {
		return bodyCloseRe.ReplaceAllString(htmlStr, script+"${0}")
	}
	return htmlStr + script
}

func toString(v any) string {
	if v == nil {
		return ""
	}
	switch t := v.(type) {
	case string:
		return t
	default:
		b, _ := json.Marshal(t)
		// trim surrounding quotes if any
		s := string(b)
		s = strings.Trim(s, `"`)
		return s
	}
}

func main() {
	// set gin mode and router
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// load built index.html (if present) so we can reuse its asset references
	baseIndexHTML = tryLoadIndex()

	// load locales from frontend/src/locales
	loadLocales()

	// Serve favicon and assets similarly to existing behavior
	router.StaticFile("/favicon", "./frontend/dist/favicon.ico")
	router.Static("/assets", "./frontend/dist/assets")

	// existing navbar proxy route preserved
	router.GET("/navbar", func(c *gin.Context) {
		resp, err := http.Get("https://src.hazelnut-paradise.com/navbar.html?content-type=text/html")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer resp.Body.Close()
		c.DataFromReader(resp.StatusCode, resp.ContentLength, resp.Header.Get("Content-Type"), resp.Body, nil)
	})

	// download route preserved
	router.GET("/download/:file", func(c *gin.Context) {
		// set HTTP headers to disable caching
		c.Header("Cache-Control", "no-store, no-cache, must-revalidate")
		c.Header("Pragma", "no-cache")
		c.Header("Expires", "0")

		file := c.Param("file")
		switch file {
		case "idensyra":
			downloadAPI.DownloadIdensyra(c)
		default:
			c.JSON(http.StatusNotFound, gin.H{"error": "unknown file"})
		}
	})

	// New server-rendered page route
	router.GET("/p/:page", pageHandler)
	// Allow also query-style access: /?page=Features
	router.GET("/", func(c *gin.Context) {
		// If a page query param is provided serve the SSR page; otherwise serve SPA index.
		if p := c.Query("page"); p != "" {
			// reuse pageHandler behavior; create a fake context param
			// simplest is to delegate to pageHandler by setting Param "page"
			c.Params = append(c.Params, gin.Param{Key: "page", Value: p})
			pageHandler(c)
			return
		}
		// Serve the built SPA index.html for all other requests (existing behavior)
		c.File("./frontend/dist/index.html")
	})

	// Start server
	addr := ":8080"
	log.Printf("Server starting on %s\n", addr)
	if err := router.Run(addr); err != nil {
		log.Fatalf("Server failed: %v\n", err)
	}
}
