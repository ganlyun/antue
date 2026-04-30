import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, './site'),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './components')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 8081,
    open: true
  }
})
