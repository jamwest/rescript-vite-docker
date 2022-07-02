import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as Path from 'path'

export default defineConfig({
  root: __dirname,
  publicDir: Path.join(__dirname, "./public"),
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: true
  },
  build: {
    emptyOutDir: true,
    outDir: '../build/app',
  }
})
