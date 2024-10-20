import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    proxy: {
      '/navbar': {
        target: 'https://hazelnut-paradise.com/navbar.html',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/navbar/, '')
      }
    }
  }
})
