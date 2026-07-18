import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default {
  base: './',
  plugins: [vue()],
  server: {
    // 允許外部（例如 preview 工具）以 PORT 環境變數指定埠號，預設維持 5173
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    proxy: {
      '/navbar': {
        target: 'https://hazelnut-paradise.com/navbar.html',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/navbar/, '')
      }
    }
  }
}
