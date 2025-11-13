import { initTelegramUser } from '@/services/useUser'

export async function initTelegramApp() {
    const tg = window.Telegram?.WebApp;
    tg?.ready();
    initTelegramUser();
    tg?.disableVerticalSwipes();
    tg?.setHeaderColor('#282828');
    tg?.setBackgroundColor('#F4F6F8');
    tg?.HapticFeedback.notificationOccurred('success');
}