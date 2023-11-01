import { TUserBadgeCategory } from "@/app/types/features/user";
import TbBackpack from "@/components/icons/TbBackpack";
import TbMapPin from "@/components/icons/TbMapPin";

/**
 * Categories for user badges
 * They are temporary until we fetch them from the server
 */
export const userBadgeCategories: TUserBadgeCategory[] = [
    {
        type: 'role',
        className: 'bg-blue-500 dark:bg-blue-600 text-white',
        icon: TbBackpack
    },
    {
        type: 'department',
    },
    {
        type: 'location',
        icon: TbMapPin,
        iconClassName: "text-primary/75"
    }
]