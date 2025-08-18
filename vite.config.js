import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        intro: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'main.html'), 
        blog: resolve(__dirname, 'blog.html'),
        music: resolve(__dirname, 'music.html'),
        gallery: resolve(__dirname, 'gallery.html')
      },
    },
  },
});

