import { FC, ReactNode } from "react";

import { IIconProps } from "@/components/icons/types/icons";

/**
 * Trend card that displays a title, an icon, and a comparison value.
 */
export type TTrendCard = {
    title: string;
    icon?: FC<IIconProps> | ReactNode;
    content: { amount?: string; comparison: { value?: number; label: string } };
}