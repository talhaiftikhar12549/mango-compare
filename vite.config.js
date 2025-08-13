import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlMinifier from 'vite-plugin-html-minifier'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
      htmlMinifier({
      minify: true,
      collapseWhitespace: true,
      keepClosingSlash: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
   build: {
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    host: true  // this allows access from network IPs
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false
    }
  }
})
