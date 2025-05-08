// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      prismjs: path.resolve(__dirname, 'node_modules/prismjs')
    }
  }
})
