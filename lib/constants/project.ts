import { FC } from "react";

import { users } from "./user";
import { EProjectStatus, TProject, TProjectBadge, TProjectBadgeCategory } from "@/app/types/features/project";
import TbPresentation from "@/components/icons/TbPresentation";
import TbFolder from "@/components/icons/TbFolder";
import { defaultBadgeCategories } from "./badge";
import TbMapPin from "@/components/icons/TbMapPin";
import TbCalendar from "@/components/icons/TbCalendar";
import TbUser from "@/components/icons/TbUser";
import TbCalendarCheck from "@/components/icons/TbCalendarCheck";
import { IIconProps } from "@/components/icons/types/icons";
import TbCalendarUp from "@/components/icons/TbCalendarUp";
import TbProgress from "@/components/icons/TbProgress";
import TbCalendarPause from "@/components/icons/TbCalendarPause";
import TbCalendarExclamation from "@/components/icons/TbCalendarExclamation";
import TbCheck from "@/components/icons/TbCheck";
import TbX from "@/components/icons/TbX";
import TbScanEye from "@/components/icons/TbScanEye";
import TbBellExclamation from "@/components/icons/TbBellExclamation";
import TbEyeCheck from "@/components/icons/TbEyeCheck";
import TbArchive from "@/components/icons/TbArchive";
import TbCash from "@/components/icons/TbCash";
import TbQuestionMark from "@/components/icons/TbQuestionMark";

/**
 * Categories for project badges
 */
export const projectBadgeCategories: TProjectBadgeCategory[] = [
    ...defaultBadgeCategories,
    {
        order: -1,
        type: 'type',
        icon: TbPresentation,
    },
    {
        order: 0,
        type: 'department',
        icon: TbFolder
    },
    {
        order: 1,
        type: 'location',
        icon: TbMapPin,
    },
    {
        order: 2,
        type: 'status',
        icon: TbCalendar,
    },
    {
        order: 3,
        type: 'client',
        icon: TbUser,
    }
]

/**
 * Placeholder projects
 */
export const projects: TProject[] = [
    {
        id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c72',
        username: 'm-olympia',
        manager: users[0],
        title: 'Olympia',
        details: {
            department: 'Marketing',
            avatarUrl: '/branding_1.svg',
            progress: Math.random() * 100,
            status: EProjectStatus.IN_PROGRESS,
            budget: Math.random() * 100000,
            startDate: new Date('2023-01-01'),
            badges: [
                {
                    category: 'internal-id',
                    label: 'MP-75'
                },
                {
                    category: 'location',
                    label: 'New York'
                },
                {
                    category: 'department',
                    label: 'Marketing'
                },
                {
                    category: 'status',
                    label: EProjectStatus.IN_PROGRESS,
                    icon: TbCalendarCheck,
                }
            ]
        }
    },
    {
        id: 'f477cde3-a54b-48af-9af5-b520cc4ccef2',
        username: 's-mirage',
        manager: users[1],
        title: 'Mirage',
        details: {
            department: 'Sales',
            avatarUrl: '/branding_2.svg',
            progress: Math.random() * 100,
            status: EProjectStatus.DELAYED,
            budget: Math.random() * 100000,
            startDate: new Date('2022-08-30'),
            badges: [
                {
                    category: 'internal-id',
                    label: 'MP-75'
                },
                {
                    category: 'location',
                    label: 'New York'
                },
                {
                    category: 'department',
                    label: 'Marketing'
                },
                {
                    category: 'status',
                    label: EProjectStatus.DELAYED,
                    icon: TbCalendarCheck,
                }
            ]
        }
    },
    {
        id: '5fe8ad16-21d9-4823-8511-2fa583aaa119',
        username: 'rd-aurora',
        manager: users[2],
        title: 'Interstellar',
        details: {
            department: 'Research and Development',
            avatarUrl: '/branding_3.svg',
            progress: Math.random() * 100,
            status: EProjectStatus.COMPLETED,
            budget: Math.random() * 100000,
            startDate: new Date('2023-11-14'),
            badges: [
                {
                    category: 'internal-id',
                    label: 'MP-75'
                },
                {
                    category: 'location',
                    label: 'New York'
                },
                {
                    category: 'department',
                    label: 'Marketing'
                },
                {
                    category: 'status',
                    label: EProjectStatus.COMPLETED,
                    icon: TbCalendarCheck,
                }
            ]
        }
    },
    {
        id: '1026f588-90d8-4f20-9461-dfd6c08685a7',
        username: 'it-aurora',
        manager: users[3],
        title: 'Aurora',
        details: {
            department: 'IT',
            avatarUrl: '/branding_4.svg',
            progress: Math.random() * 100,
            status: EProjectStatus.CANCELED,
            budget: Math.random() * 100000,
            startDate: new Date('2021-06-14'),
            badges: [
                {
                    category: 'internal-id',
                    label: 'MP-75'
                },
                {
                    category: 'location',
                    label: 'New York'
                },
                {
                    category: 'department',
                    label: 'Marketing'
                },
                {
                    category: 'status',
                    label: EProjectStatus.CANCELED,
                    icon: TbCalendarCheck,
                }
            ]
        }
    },
    {
        id: '5caeb825-b3da-40c2-ae83-8719f6540ad1',
        username: 'hr-spectrum',
        manager: users[4],
        title: 'Spectrum',
        details: {
            department: 'Human Resources',
            avatarUrl: '/branding_5.svg',
            progress: Math.random() * 100,
            status: EProjectStatus.UNDER_REVIEW,
            budget: Math.random() * 100000,
            startDate: new Date('2023-03-15'),
            badges: [
                {
                    category: 'internal-id',
                    label: 'MP-75'
                },
                {
                    category: 'location',
                    label: 'New York'
                },
                {
                    category: 'department',
                    label: 'Marketing'
                },
                {
                    category: 'status',
                    label: EProjectStatus.UNDER_REVIEW,
                    icon: TbCalendarCheck,
                }
            ]
        }
    },
    {
        id: '6563b992-1b17-4b5c-b07e-732c45c8fc5b',
        username: 'sd-zephyr',
        manager: users[4],
        title: 'Zephyr',
        details: {
            department: 'Software Development',
            avatarUrl: '/branding_3.svg',
            progress: Math.random() * 100,
            status: EProjectStatus.NEEDS_ATTENTION,
            budget: Math.random() * 100000,
            startDate: new Date('2022-12-23'),
            badges: [
                {
                    category: 'internal-id',
                    label: 'MP-75'
                },
                {
                    category: 'location',
                    label: 'New York'
                },
                {
                    category: 'department',
                    label: 'Marketing'
                },
                {
                    category: 'status',
                    label: EProjectStatus.NEEDS_ATTENTION,
                    icon: TbCalendarCheck,
                }
            ]
        },
    },
]

/**
 * Default badges for projects.
 * They can't be removed or edited.
 */
export const defaultProjectBadges: TProjectBadge[] = [
    {
        label: 'Project',
        category: 'type'
    }
]

/**
 * Colors for project statuses  
 */
export const ProjectStatusColors: Record<EProjectStatus, HTMLElement['className']> = {
    [EProjectStatus.UNKNOWN]: 'text-gray-500',
    [EProjectStatus.NOT_STARTED]: 'text-gray-500',
    [EProjectStatus.IN_PROGRESS]: 'text-blue-500',
    [EProjectStatus.ON_HOLD]: 'text-gray-500',
    [EProjectStatus.DELAYED]: 'text-orange-500',
    [EProjectStatus.COMPLETED]: 'text-green-500',
    [EProjectStatus.CANCELED]: 'text-gray-500',
    [EProjectStatus.UNDER_REVIEW]: 'text-purple-500',
    [EProjectStatus.NEEDS_ATTENTION]: 'text-yellow-500',
    [EProjectStatus.PENDING_APPROVAL]: 'text-gray-500',
    [EProjectStatus.ARCHIVED]: 'text-gray-500',
    [EProjectStatus.OVER_BUDGET]: 'text-red-500',
    [EProjectStatus.AT_RISK]: 'text-red-500',
}

export const ProjectStatusIcons: Record<EProjectStatus, FC<IIconProps>> = {
    [EProjectStatus.UNKNOWN]: TbQuestionMark,
    [EProjectStatus.NOT_STARTED]: TbCalendarUp,
    [EProjectStatus.IN_PROGRESS]: TbProgress,
    [EProjectStatus.ON_HOLD]: TbCalendarPause,
    [EProjectStatus.DELAYED]: TbCalendarExclamation,
    [EProjectStatus.COMPLETED]: TbCheck,
    [EProjectStatus.CANCELED]: TbX,
    [EProjectStatus.UNDER_REVIEW]: TbScanEye,
    [EProjectStatus.NEEDS_ATTENTION]: TbBellExclamation,
    [EProjectStatus.PENDING_APPROVAL]: TbEyeCheck,
    [EProjectStatus.ARCHIVED]: TbArchive,
    [EProjectStatus.OVER_BUDGET]: TbCash,
    [EProjectStatus.AT_RISK]: TbCalendar,
}