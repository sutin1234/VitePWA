import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [vue(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: null,
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    devOptions: {
      enabled: true
    }
  })],
})
