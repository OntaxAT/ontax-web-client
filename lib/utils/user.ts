import { TUser } from "@/app/types/features/user";

/**
 * Get the display name of a user
 * @param user The user to get the display name of
 * @returns The display name of the user (first name + last name)
 */
export const getDisplayName = (user: TUser) => {
    return `${user.details.firstName} ${user.details.lastName}`;
};

/**
 * Get the initials of a user
 * @param user The user to get the initials of
 * @returns The initials of the user (first letter of first name + first letter of last name)
 * @example getInitials({ details: { firstName: 'John', lastName: 'Doe' } }) // JD
 */
export const getInitials = (user: TUser) => {
    return `${user.details.firstName[0]}${user.details.lastName[0]}`;
}

/**
 * Get the URL of a user
 * @param user The user to get the URL of
 * @returns The URL of the user
 */
export const getUserUrl = (user: TUser) => {
    return `/user/${user.username}`;
}