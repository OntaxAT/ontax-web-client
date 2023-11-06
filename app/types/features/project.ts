import { IIconProps } from "@/components/icons/types/icons";
import { TEntity } from "../entity"
import { TUser } from "./user";
import { FC } from "react";

/**
 * Data type for a project
 */
export type TProject = TEntity & {
    title: string;
    manager: TUser;
    details?: {
        progress: number;
        avatarUrl?: FC<IIconProps>; // Temporary until the images are fetched from the server
        status: TProjectStatus;
        reviewers?: TUser[];
        budget: number;
        startDate: Date;
    }
}

export type TProjectStatus = "not-started" | 'in-progress' | 'on-hold' | 'delayed' | 'completed' | 'canceled' | 'under-review' | 'needs-attention' | 'pending-approval' | 'archived' | 'over-budget' | 'at-risk';