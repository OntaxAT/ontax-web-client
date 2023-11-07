import { IIconProps } from "@/components/icons/types/icons";
import { TAdressableEntity } from "../entity"
import { TUser } from "./user";
import { FC } from "react";
import { TBadge, TBadgeCategory } from "./badge";

/**
 * Data type for a project
 */
export type TProject = TAdressableEntity & {
    title: string;
    manager: TUser;
    details?: {
        department: string;
        progress: number;
        avatarUrl?: string;
        status: EProjectStatus;
        reviewers?: TUser[];
        budget: number;
        startDate: Date;
        badges?: TProjectBadge[];
    }
}

/**
 * Possible statuses for a project
 */
export enum EProjectStatus {
    UNKNOWN = 'Unknown',
    NOT_STARTED = 'Not Started',
    IN_PROGRESS = 'In Progress',
    ON_HOLD = 'On Hold',
    DELAYED = 'Delayed',
    COMPLETED = 'Completed',
    CANCELED = 'Canceled',
    UNDER_REVIEW = 'Under Review',
    NEEDS_ATTENTION = 'Needs Attention',
    PENDING_APPROVAL = 'Pending Approval',
    ARCHIVED = 'Archived',
    OVER_BUDGET = 'Over Budget',
    AT_RISK = 'At Risk',
}

/**
 * Badges related to a project
 * They may represent responsible teams, departments, or other essential information
 */
export type TProjectBadge = Omit<TBadge<TProjectBadgeCategory['type'] | TProjectBadgeCategory>, 'id'>;

/**
 * The category of a project badge (e.g. department, location, etc.)
 */
export type TProjectBadgeCategory = TBadgeCategory<'department' | 'internal-id' | 'client' | 'location' | 'status'>;