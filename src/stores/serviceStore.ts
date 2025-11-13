import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServiceStore = defineStore('serviceStore', () => {
    let keyboardOpen = ref(false)

    return {
        keyboardOpen
    }
})