import { TAdressableEntity } from "../entity";
import { TBadge, TBadgeCategory } from "./badge";

/**
 * The basic user type for the application.
 */
export type TUser = TAdressableEntity & {
    details: {
        avatarUrl?: string;
        firstName: string;
        lastName: string;
        bio?: string;
        badges?: TUserBadge[];
    }
    email: string;
    role: string;
}

/**
 * Badges related to a user
 * They may represent certain roles, departments, or other essential information
 */
export type TUserBadge = Omit<TBadge<TUserBadgeCategory['type'] | TUserBadgeCategory>, 'id'>;
/**
 * The category of a user badge (e.g. role, department, etc.)
 */
export type TUserBadgeCategory = TBadgeCategory<'role' | 'department' | 'location' | 'internal-id'>;
