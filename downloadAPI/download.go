package downloadAPI

import (
	"crypto/tls"
	"encoding/json"
	"io"
	"net/http"
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

	assets, ok := jsonMap["assets"].([]any)
	if !ok {
		c.JSON(http.StatusNotFound, gin.H{"error": "no assets found"})
		return
	}
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
	if url == "" {
		c.JSON(http.StatusNotFound, gin.H{"error": "no zip asset found"})
		return
	}

	c.Redirect(http.StatusPermanentRedirect, url)
}
