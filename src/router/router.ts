import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Friends from '@/views/Friends.vue'
import Calendar from '@/views/Calendar.vue'
import SwipeMode from '@/views/SwipeMode.vue'
import User from '@/views/User.vue'
import Event from '@/views/Event.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { layout: 'DefaultLayout' },
        },
        {
            path: '/friends',
            name: 'Friends',
            component: Friends,
            meta: { layout: 'DefaultLayout' },
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
            meta: { layout: 'DefaultLayout' },
        },
        {
            path: '/swipe',
            name: 'Swipe',
            component: SwipeMode,
            meta: { layout: 'DefaultLayout' },
        },

        {
            path: '/user/:id',
            name: 'User',
            component: User,
            meta: { layout: 'EmptyLayout' },
        },
        {
            path: '/event/:id',
            name: 'Event',
            component: Event,
            meta: { layout: 'EmptyLayout' },
        },
    ],
})

export default router