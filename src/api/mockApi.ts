import { mockFriends } from '@/mocks/friends'
import { mockEvents } from '@/mocks/events'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {
    async getFriends() {
        try {
            await delay(800)
            const friends = [...mockFriends]
            console.log('Mock API: друзья загружены', friends)
            return friends
        } catch (error) {
            console.error('Mock API: ошибка загрузки друзей', error)
            throw error
        }
    },

    async getMyEvents() {
        try {
            await delay(800)
            const events = [...mockEvents]
            console.log('Mock API: ивенты загружены', events)
            return events
        } catch (error) {
            console.error('Mock API: ошибка загрузки ивентов', error)
            throw error
        }
    },
}