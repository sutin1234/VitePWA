import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  plugins: [vue(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: null,
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    mode: 'production',
    // strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    devOptions: {
      enabled: true,
      type: 'module',
    }

  })],
  build: {
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
  }
})
