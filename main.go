package main

import (
	"crypto/tls"
	"net/http"

	"backend/downloadAPI"

	"github.com/gin-gonic/gin"
)

var httpClient = &http.Client{
	Transport: &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	},
}

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// 設置靜態文件服務
	router.StaticFile("/favicon", "./frontend/dist/favicon.ico")
	router.Static("/assets", "./frontend/dist/assets")

	// 處理所有其他路由，返回 index.html（用於處理前端路由）
	router.GET("/", func(c *gin.Context) {
		c.File("./frontend/dist/index.html")
	})

	router.GET("/navbar", func(c *gin.Context) {
		resp, err := httpClient.Get("https://src.hazelnut-paradise.com/navbar.html?content-type=text/html")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer resp.Body.Close()
		c.DataFromReader(resp.StatusCode, resp.ContentLength, resp.Header.Get("Content-Type"), resp.Body, nil)
	})

	router.GET("/download/:file", func(c *gin.Context) {
		// 設置 HTTP 標頭以禁止快取
		c.Header("Cache-Control", "no-store, no-cache, must-revalidate")
		c.Header("Pragma", "no-cache")
		c.Header("Expires", "0")

		file := c.Param("file")
		switch file {
		case "idensyra":
			downloadAPI.DownloadIdensyra(c)
		}
	})

	router.Run(":8080")
}
