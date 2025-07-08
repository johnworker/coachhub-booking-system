import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from 'tailwindcss' // 1. 引入 Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
