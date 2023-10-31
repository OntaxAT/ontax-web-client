import { TBadge } from "./badge";

/**
 * The basic user type for the application.
 */
export type TUser = {
    id: string;
    username: string;
    details: {
        avatarUrl?: string;
        firstName: string;
        lastName: string;
        badges?: TUserBadge[];
    }
    email: string;
    role: string;
}

/**
 * Badges related to a user
 * They may represent certain roles, departments, or other essential information
 */
export type TUserBadge = Omit<TBadge, 'id'> & {
    category?: TUserBadgeCategory;
};
/**
 * The category of a user badge (e.g. role, department, etc.)
 */
export type TUserBadgeCategory = {
    type: 'role' | 'department' | 'location';
    className?: string;
}
