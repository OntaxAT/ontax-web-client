import { IIconProps } from "@/components/icons/types/icons";
import { FC } from "react";
import { TLinkData } from "../components/ui/linkData";
import { TUser } from "./user";


export type TNotification = {
    id: string;
    title: string;
    description: string;
    details: {
        category: ENotificationCategory;
        sender?: TUser; // If not specified, then the sender is the system
        timestamp: Date;
        read?: boolean;
        icon?: FC<IIconProps>;
        link?: TLinkData;
    }
}

/**
 * Categories for notifications (e.g. critical, announcement, etc.)
 */
export enum ENotificationCategory {
    CRITICAL = 'critical', // This is for critical notifications that need to be seen immediately
    ANNOUNCEMENT = 'announcement', // This is for announcements that are not critical
    REMINDER = 'reminder', // This is for reminders that are not critical
    ALERT = 'alert', // This is for alerts that are not critical
    EVENT = 'event', // This is for events that are important but not critical
    OTHER = 'other' // This is for other notifications that are not critical
}