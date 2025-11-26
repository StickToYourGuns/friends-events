import { mockFriends } from '@/mocks/friends'
import { mockEvents } from '@/mocks/events'
import { mockSwipeEvents } from '@/mocks/swipeEvents'

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

    // async getSwipeEvents() {
    //     try {
    //         await delay(800)
    //         const events = [...mockSwipeEvents]
    //         console.log('Mock API: ивенты для свайпа загружены', events)
    //         return events
    //     } catch (error) {
    //         console.error('Mock API: ошибка загрузки ивентов для свайпа', error)
    //         throw error
    //     }
    // },
    async nextSwipeEvent() {
        try {
            // await delay(500)
            const event = mockSwipeEvents[Math.floor(Math.random() * mockSwipeEvents.length)]
            console.log('Mock API: следующий ивент для свайпа', event)
            return event
        } catch (error) {
            console.error('Mock API: ошибка получения следующего ивента для свайпа', error)
            throw error
        }
    }
}