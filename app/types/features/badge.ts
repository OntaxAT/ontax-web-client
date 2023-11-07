import { FC, HTMLAttributes } from "react";

import { IIconProps } from "@/components/icons/types/icons";

/**
 * Basic data for a badge
 */
export type TBadge<T = undefined> = {
    id: string;
    label: string | number;
    className?: string;
    category?: T;
    referenceId?: string;
    icon?: FC<IIconProps>;
}
/**
 * A badge that can be ordered
 */
export type TOrderableBadge = TBadge & {
    order: number;
}

/**
 * The category of a badge
 */
export type TBadgeCategory<T> = {
    order: number;
    type: 'type' | 'internal-id' | T;
    className?: string;
    icon?: FC<IIconProps>;
    iconClassName?: HTMLAttributes<SVGElement>['className'];
}