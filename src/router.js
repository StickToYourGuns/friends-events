import { createRouter, createWebHistory } from 'vue-router'

// Импортируем страницы
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Event from '@/views/Event.vue'

// Настройка роутера
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  { path: '/event/:id', name: 'Event', component: Event },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
