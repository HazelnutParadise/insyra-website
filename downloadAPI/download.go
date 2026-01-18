package downloadAPI

import (
	"crypto/tls"
	"encoding/json"
	"html"
	"io"
	"net/http"
	"regexp"
	"strings"

	"github.com/gin-gonic/gin"
)

func DownloadIdensyra(c *gin.Context) {
	var url string

	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	client := &http.Client{Transport: tr}

	resp, err := client.Get("https://api.github.com/repos/HazelnutParadise/idensyra/releases/latest")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer resp.Body.Close()

	var jsonMap map[string]any
	if err := json.Unmarshal(respBody, &jsonMap); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	assetsAny, hasAssets := jsonMap["assets"]
	var assets []any
	if hasAssets {
		if a, ok := assetsAny.([]any); ok {
			assets = a
		}
	}
	// if there are assets, try to find a zip asset first
	if len(assets) > 0 {
		for _, asset := range assets {
			assetMap, ok := asset.(map[string]any)
			if !ok {
				continue
			}
			contentType, _ := assetMap["content_type"].(string)
			name, _ := assetMap["name"].(string)
			downloadURL, _ := assetMap["browser_download_url"].(string)
			if downloadURL == "" {
				continue
			}
			if strings.Contains(contentType, "zip") || strings.HasSuffix(strings.ToLower(name), ".zip") {
				url = downloadURL
				break
			}
		}
	}
	if url == "" {
		// fallback: try to parse release body for zip links or links labeled "Download" / "下載"
		body, _ := jsonMap["body"].(string)
		debug := c.Query("debug") == "true"
		if body != "" {
			// unescape HTML entities
			body = html.UnescapeString(body)

			// collect all candidate URLs from various patterns
			var candidates []string

			// markdown links: [Download]( https://... ) allowing optional spaces and angle brackets
			reMdAll := regexp.MustCompile(`(?i)\[[^\]]*(?:download|下載)[^\]]*\]\(\s*<?\s*(https?://[^)\s>]+)\s*>?\s*\)`)
			for _, m := range reMdAll.FindAllStringSubmatch(body, -1) {
				if len(m) > 1 {
					candidates = append(candidates, strings.TrimSpace(m[1]))
				}
			}

			// direct .zip URLs
			reZipAll := regexp.MustCompile(`(?i)(https?://[^\s'"\)<>]+\.zip(?:\?[^\s'"\)<>]*)?)`)
			for _, m := range reZipAll.FindAllStringSubmatch(body, -1) {
				if len(m) > 1 {
					candidates = append(candidates, strings.TrimSpace(m[1]))
				}
			}

			// angle bracketed URLs: <https://...>
			reAngle := regexp.MustCompile(`(?i)<(https?://[^\s>]+\.zip(?:\?[^\s>]+)?)>`)
			for _, m := range reAngle.FindAllStringSubmatch(body, -1) {
				if len(m) > 1 {
					candidates = append(candidates, strings.TrimSpace(m[1]))
				}
			}

			// HTML anchors with Download or 下載 text
			reAAll := regexp.MustCompile(`(?i)<a[^>]+href=["']?([^"'>\s]+)["']?[^>]*>[^<]*(?:download|下載)[^<]*</a>`)
			for _, m := range reAAll.FindAllStringSubmatch(body, -1) {
				if len(m) > 1 {
					candidates = append(candidates, strings.TrimSpace(m[1]))
				}
			}

			// dedupe while preserving order
			seen := map[string]bool{}
			uniq := []string{}
			for _, u := range candidates {
				if u == "" {
					continue
				}
				if !seen[u] {
					seen[u] = true
					uniq = append(uniq, u)
				}
			}

			// prefer first candidate that looks like a zip
			for _, u := range uniq {
				if strings.Contains(strings.ToLower(u), ".zip") {
					url = u
					break
				}
			}
			// if none ends with .zip, take the first candidate
			if url == "" && len(uniq) > 0 {
				url = uniq[0]
			}

			if debug {
				// return candidates to help debug why match fails
				snippet := body
				if len(snippet) > 1000 {
					snippet = snippet[:1000]
				}
				c.JSON(http.StatusOK, gin.H{"candidates": uniq, "selected": url, "body_snippet": snippet})
				return
			}
		}
		if url == "" {
			c.JSON(http.StatusNotFound, gin.H{"error": "no zip asset found and no Download link in release notes"})
			return
		}
	}

	// validate the resolved URL is reachable and points to a zip file
	req, _ := http.NewRequest("HEAD", url, nil)
	resp2, err2 := client.Do(req)
	if err2 != nil || resp2.StatusCode < 200 || resp2.StatusCode >= 400 {
		// fallback: try GET the first byte (some servers disallow HEAD)
		req2, _ := http.NewRequest("GET", url, nil)
		req2.Header.Set("Range", "bytes=0-0")
		resp3, err3 := client.Do(req2)
		if err3 != nil || resp3.StatusCode < 200 || resp3.StatusCode >= 400 {
			// accept if URL ends with .zip, otherwise error out
			if !strings.HasSuffix(strings.ToLower(url), ".zip") {
				c.JSON(http.StatusBadGateway, gin.H{"error": "resolved download URL not reachable"})
				return
			}
		} else {
			if resp3.Body != nil {
				defer resp3.Body.Close()
			}
			ct := resp3.Header.Get("Content-Type")
			if !strings.Contains(strings.ToLower(ct), "zip") && !strings.HasSuffix(strings.ToLower(url), ".zip") {
				c.JSON(http.StatusBadGateway, gin.H{"error": "resolved download URL is not a zip file"})
				return
			}
		}
	} else {
		if resp2.Body != nil {
			defer resp2.Body.Close()
		}
		ct := resp2.Header.Get("Content-Type")
		if !strings.Contains(strings.ToLower(ct), "zip") && !strings.HasSuffix(strings.ToLower(url), ".zip") {
			c.JSON(http.StatusBadGateway, gin.H{"error": "resolved download URL is not a zip file"})
			return
		}
	}

	c.Redirect(http.StatusPermanentRedirect, url)
}
