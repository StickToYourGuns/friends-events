export function useDateParser(dateStr: Date | string) {
    const date = new Date(dateStr);
    const now = new Date();

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const year = date.getFullYear();

    const showYear = year !== now.getFullYear();
    const datePart = showYear ? `${day} ${month} ${year}` : `${day} ${month}`;

    return `${datePart}, ${hours}:${minutes}`;
}