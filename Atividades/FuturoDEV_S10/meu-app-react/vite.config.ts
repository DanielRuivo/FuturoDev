import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
    hmr: {
      clientPort: 443
    },
    watch: {
      usePolling: true
    },
    cors: true,
    allowedHosts: [
      '5174-iet58n73tr6iilau223xc-7bec04cc.manusvm.computer',
      '.manusvm.computer'
    ]
  }
})
