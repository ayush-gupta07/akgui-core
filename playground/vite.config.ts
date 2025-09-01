import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Playground configuration for both development and production
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: resolve(__dirname),
  base: '/',
  server: {
    port: 3001,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      'akgui-core': resolve(__dirname, '../src/index.ts'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode === 'production' ? 'production' : 'development'),
  },
}))
