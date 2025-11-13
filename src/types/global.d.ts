declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                ready: () => void;
                disableVerticalSwipes: () => void;
                setHeaderColor: (color: string) => void;
                setBackgroundColor: (color: string) => void;
                HapticFeedback: {
                    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void
                    notificationOccurred: (type: 'success' | 'error' | 'warning') => void
                    selectionChanged: () => void
                }
            };
        };
    }
}

export { };