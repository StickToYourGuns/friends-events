import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/friends-events/',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
