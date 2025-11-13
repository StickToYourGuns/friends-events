import type { FullEvent } from "@/types";

export interface TelegramUser {
    allows_write_to_pm: boolean,
    first_name: string,
    id: number,
    is_premium: boolean,
    language_code: string,
    last_name: string,
    photo_url: string,
    username: string,
}

export interface FullUser extends TelegramUser {
    friends?: Friend[]
    events?: FullEvent[]
}

export interface Friend {
    id: number
    username: string
    telegram_username: string
    photo_url: string
    bio: string
}