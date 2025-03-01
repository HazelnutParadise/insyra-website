package downloadAPI

import (
	"crypto/tls"
	"encoding/json"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

func DownloadIdensyra(c *gin.Context) {
	var url string

	// 創建忽略SSL驗證的client
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	client := &http.Client{Transport: tr}

	// 查詢repo最新release
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

	// 讀取成json
	var jsonMap map[string]interface{}
	json.Unmarshal(respBody, &jsonMap)

	// 正確處理 assets 陣列
	assets := jsonMap["assets"].([]interface{})
	for _, asset := range assets {
		assetMap, ok := asset.(map[string]interface{})
		if ok && assetMap["content_type"] == "application/zip" {
			url = assetMap["browser_download_url"].(string)
		}
	}

	c.Redirect(http.StatusPermanentRedirect, url)
}
