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
 * Get the URL of a user
 * @param user The user to get the URL of
 * @returns The URL of the user
 */
export const getUserUrl = (user: TUser) => {
    return `/user/${user.id}`;
}