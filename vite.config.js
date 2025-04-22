import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 全局css 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles.css";' // 添加公共样式
      }
    }
  },
  server: {
    host: '0.0.0.0', // 允许通过 IP 地址访问
    port: 5175, // 可选：指定端口号
    strictPort: true, // 可选：确保端口不被占用
    open: true // 可选：自动打开浏览器
  }
})
