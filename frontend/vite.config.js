// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No hace falta nada más, Vite carga automáticamente postcss.config.js
export default defineConfig({
  plugins: [react()]
})
