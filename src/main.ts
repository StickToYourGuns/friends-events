import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { initTelegramUser } from '@/composables/useUser'
import App from './App.vue'
import router from './router/router.ts'
import '@/assets/styles/main.scss'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')

// initTelegramUser()