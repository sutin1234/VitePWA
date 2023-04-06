import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

// import './registerSW'


// navigator.serviceWorker.register(
//     import.meta.env.MODE === 'production' ? '/sw.js' : '/sw.js',
//     { type: import.meta.env.MODE === 'production' ? 'classic' : 'module' }
//   )

createApp(App).mount('#app')
