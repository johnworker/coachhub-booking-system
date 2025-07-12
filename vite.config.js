import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from 'tailwindcss' // 1. 引入 Tailwind
import { VitePWA } from 'vite-plugin-pwa';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg','robots.txt','apple-touch-icon.png'],
      manifest: {
        name: 'CoachHub Booking',
        short_name: 'CoachHub',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
css: { // 2. 配置 Tailwind
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  resolve: {
    alias: { // 2. 新增別名
      "@": path.resolve(__dirname, "./src"),
    },
  },

});