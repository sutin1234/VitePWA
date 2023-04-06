import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'https://vite-pbo2zv8z1-sutin1234.vercel.app',
  plugins: [vue(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'script',
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    mode: 'production',
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    // devOptions: {
    //   enabled: true,
    //   type: 'module',
    // }

  }),
],
  build: {
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
  }
})
