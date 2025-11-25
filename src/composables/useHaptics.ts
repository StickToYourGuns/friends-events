const tg = window.Telegram?.WebApp;

export const Haptics = {
    impact: {
        light: () => tg?.HapticFeedback.impactOccurred('light'),
        medium: () => tg?.HapticFeedback.impactOccurred('medium'),
        heavy: () => tg?.HapticFeedback.impactOccurred('heavy'),
        rigid: () => tg?.HapticFeedback.impactOccurred('rigid'),
        soft: () => tg?.HapticFeedback.impactOccurred('soft'),
    },

    notification: {
        success: () => tg?.HapticFeedback.notificationOccurred('success'),
        error: () => tg?.HapticFeedback.notificationOccurred('error'),
        warning: () => tg?.HapticFeedback.notificationOccurred('warning'),
    },

    selection: () => tg?.HapticFeedback.selectionChanged(),
}
