import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    server: {
      proxy: {
        '/api': { target: 'http://localhost:8000', changeOrigin: true },
        '/cases': { target: 'http://localhost:8000', changeOrigin: true },
        '/evidence': { target: 'http://localhost:8000', changeOrigin: true },
        '/ws': { target: 'ws://localhost:8000', ws: true },
      },
    },
    hmr: process.env.DISABLE_HMR === 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  }
})
