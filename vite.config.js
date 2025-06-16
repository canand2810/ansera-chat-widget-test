import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}', // ensure this is still here
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'AnseraChatWidget',
      fileName: () => `widget.js`,
      formats: ['iife'], // good for CDN <script> tags
    },
    rollupOptions: {
      // ❌ remove this if it exists:
      // external: ['react', 'react-dom'],
    },
  },
})
