const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const rollupNodePolyFill = require('rollup-plugin-node-polyfills');
const { NodeGlobalsPolyfillPlugin } = require('@esbuild-plugins/node-globals-polyfill');
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');

module.exports = defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
        'process.env.NODE_ENV': '"production"',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'AnseraChatWidget',
      fileName: () => `widget.js`,
      formats: ['iife'],
    },
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
