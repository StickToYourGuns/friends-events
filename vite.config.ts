import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: './',
  server: {
    allowedHosts: [
      'eugene-coralliferous-uninstructively.ngrok-free.dev',
      'fa42a585-3abd-440c-820f-4c5e7ec4378e.tunnel4.com'
    ]
  },
  plugins: [vue(), svgLoader()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/variables.scss" as *;
        @use "@/assets/styles/transitions.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})