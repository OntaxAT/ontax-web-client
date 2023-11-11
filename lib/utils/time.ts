import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths } from "date-fns"

/**
 * Returns the difference between two dates in words
 * @param date The date to compare
 * @param baseDate The base date to compare against
 * @returns The difference between the two dates in words
 */
export const getTimeDifferenceInWords = (date: Date, baseDate: Date = new Date()): string => {
    const diffMin = differenceInMinutes(baseDate, date);
    const diffHours = differenceInHours(baseDate, date);
    const diffDays = differenceInDays(baseDate, date);
    const diffMonths = differenceInMonths(baseDate, date);
    const diffYears = baseDate.getFullYear() - date.getFullYear();

    if (diffMin < 1) {
        return 'Just now';
    }
    if (diffMin < 60) {
        return `${diffMin} min${diffMin > 1 ? 's' : ''} ago`;
    }

    if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    }

    if (diffDays < 30) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }

    if (diffMonths < 12) {
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    }
    return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
}