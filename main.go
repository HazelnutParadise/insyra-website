package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// 設置靜態文件服務
	router.Static("/assets", "./frontend/dist/assets")

	// 處理所有其他路由，返回 index.html（用於處理前端路由）
	router.GET("/", func(c *gin.Context) {
		c.File("./frontend/dist/index.html")
	})

	router.GET("/navbar", func(c *gin.Context) {
		resp, err := http.Get("https://src.hazelnut-paradise.com/navbar.html")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer resp.Body.Close()
		c.DataFromReader(resp.StatusCode, resp.ContentLength, resp.Header.Get("Content-Type"), resp.Body, nil)
	})

	router.Run(":8080")
}
