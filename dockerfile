# 前端構建階段（Node.js）
FROM node:23-alpine AS frontend-builder

WORKDIR /app

# 複製源代碼並安裝前端依賴項目
COPY frontend/ /app/frontend
RUN cd frontend && npm install && npm run build


# 後端構建階段（Go）
FROM golang:1.23-alpine AS backend-builder

WORKDIR /app

# 複製源代碼並構建後端
COPY . .
COPY --from=frontend-builder /app/frontend/build /app/frontend/build
RUN go build -o main main.go


# 最終運行階段
FROM alpine:latest

WORKDIR /app

# 從後端構建階段複製編譯好的可執行文件
COPY --from=backend-builder /app/main /app/main
COPY --from=backend-builder /app/frontend/build /app/frontend/build

# 設定默認啟動命令
CMD ["/app/main"]
