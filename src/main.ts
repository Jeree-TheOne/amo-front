import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './main.css'
import './interceptors/axios'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
