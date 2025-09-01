import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Playground development configuration
export default defineConfig({
  plugins: [react()],
  root: 'playground',
  server: {
    port: 3001,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      'akgui-core': resolve(__dirname, '../src/index.ts'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
})
