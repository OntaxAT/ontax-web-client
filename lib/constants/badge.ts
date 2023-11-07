import { TBadgeCategory } from "@/app/types/features/badge";
import TbIdBadge2 from "@/components/icons/TbIdBadge2";

/**
 * Default badge categories
 */
export const defaultBadgeCategories: TBadgeCategory<'internal-id'>[] = [
    {
        order: 0,
        type: 'internal-id',
        icon: TbIdBadge2,
    }
];