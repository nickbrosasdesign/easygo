import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/easygo/',
  plugins: [react()],
  // maplibre-gl loads its own web worker via a relative import.meta.url - Vite's
  // esbuild dep pre-bundling rewrites that in a way that breaks the worker load
  // (it hangs pending forever, so no vector tiles ever get parsed/rendered).
  optimizeDeps: {
    exclude: ['maplibre-gl'],
  },
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        main: fileURLToPath(new URL('./main.html', import.meta.url)),
      },
    },
  },
})
