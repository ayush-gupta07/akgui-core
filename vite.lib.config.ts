import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Library build configuration
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AKGUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'index.es.js'
          case 'cjs':
            return 'index.cjs.js'
          case 'umd':
            return 'index.umd.js'
          default:
            return `index.${format}.js`
        }
      }
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library
      external: ['react', 'react-dom'],
      // Exclude demo files from the library build
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
      // Exclude demo files using this plugin
      plugins: [
        {
          name: 'exclude-demo-files',
          resolveId(id) {
            if (id.endsWith('.demo.tsx') || id.endsWith('.demo.ts')) {
              return { id, external: true }
            }
            return null
          }
        }
      ],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    // Generate source maps for debugging
    sourcemap: true,
    // Ensure CSS is also built
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
