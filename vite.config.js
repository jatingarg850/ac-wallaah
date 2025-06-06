import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // Using Vite's default port
    host: true, // Allow access from all network interfaces
    strictPort: true, // Ensure exact port usage
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '*.ngrok-free.app',
      'ce5f-103-101-119-214.ngrok-free.app' // Adding specific ngrok host
    ],
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/x-date-pickers', '@emotion/react', '@emotion/styled', 'date-fns'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@mui/x-date-pickers', '@mui/material', 'date-fns'],
  },
})

