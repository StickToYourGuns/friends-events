import { useUserStore } from '@/stores/userStore'
import { mockApi } from '@/api/mockApi'
import type { FullUser } from '@/types'

export async function initTelegramUser() {
    const userStore = useUserStore()
    const tg = window.Telegram?.WebApp;

    const initDataUnsafe = (tg as any).initDataUnsafe
    const user = initDataUnsafe.user
    const friends = await mockApi.getFriends()
    const events = await mockApi.getMyEvents()
    console.log('Вот такая хуйня', user, friends, events);
    
    const fullUser: FullUser = {
        ...user,
        friends,
        events,
    }
    userStore.setUser(fullUser)
}