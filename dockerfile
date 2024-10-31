FROM golang:1.23-alpine
FROM node:23-alpine

WORKDIR /app

COPY . .
RUN cd frontend && npm install && npm run build
RUN go build -o main main.go