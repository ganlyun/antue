import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, './examples'),
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './components')
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 8080,
    open: false
  }
})
