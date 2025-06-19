import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'), // ✅ Fix for process reference
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/embed.jsx'),
      name: 'EmbedChatWidget',
      fileName: () => 'embed.js',
      formats: ['iife'], // IIFE allows it to be loaded directly in browser
    },
    rollupOptions: {
      external: [],
    },
  },
});
