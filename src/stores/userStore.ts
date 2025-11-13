import { ref } from "vue";
import { defineStore } from 'pinia'
import type { TelegramUser, FullUser, Friend, FullEvent } from '@/types'

export const useUserStore = defineStore('userStore', () => {
    const fullUser = ref<FullUser | null>(null)

    const setUser = (newUser: FullUser) => {
        if (!fullUser.value) {
            fullUser.value = newUser
        } else {
            Object.assign(fullUser.value, newUser)
        }
        console.log(`UserStore. Пользователь инициализирован: `, fullUser.value)
    }

    return {
        fullUser,

        setUser,
    }
})