import type { FullEvent, TelegramUser } from '@/types'

export function isEvent(content: FullEvent | TelegramUser): content is FullEvent {
    return 'title' in content && 'location_name' in content
}

export function isUser(content: FullEvent | TelegramUser): content is TelegramUser {
    return 'username' in content || 'first_name' in content
}