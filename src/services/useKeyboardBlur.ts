import { onMounted, onUnmounted } from 'vue'
import { useServiceStore } from '@/stores/serviceStore.ts'

export function useKeyboardWatcher(): void {
    const services = useServiceStore()

    const handleFocus = (e: FocusEvent): void => {
        const target = e.target as HTMLElement
        if (target.matches('input, textarea, [contenteditable]')) {
            services.keyboardOpen = true
        }
    }

    const handleBlur = (e: FocusEvent): void => {
        const target = e.target as HTMLElement
        if (target.matches('input, textarea, [contenteditable]')) {
            services.keyboardOpen = false
        }
    }

    const handleOutsideClick = (e: MouseEvent): void => {
        const target = e.target as HTMLElement
        const isInput = target.closest('input, textarea, [contenteditable]')
        if (!isInput) {
            const active = document.activeElement as HTMLElement | null
            if (active && ['INPUT', 'TEXTAREA'].includes(active.tagName)) {
                active.blur()
            }
        }
    }

    onMounted(() => {
        document.addEventListener('focusin', handleFocus)
        document.addEventListener('focusout', handleBlur)
        document.addEventListener('click', handleOutsideClick)
    })

    onUnmounted(() => {
        document.removeEventListener('focusin', handleFocus)
        document.removeEventListener('focusout', handleBlur)
        document.removeEventListener('click', handleOutsideClick)
    })
}