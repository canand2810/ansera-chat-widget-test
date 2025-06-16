import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
  },
  resolve: {
    alias: {
      process: 'process/browser',
    },
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'AnseraChatWidget',
      fileName: () => `widget.js`,
      formats: ['iife'],
    },
  },
})
