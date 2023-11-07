import { Branding1, Branding2, Branding5, Branding4, Branding3 } from "@/components/icons/BrandingPlaceholders";
import { users } from "./user";
import { TProject, TProjectBadge, TProjectBadgeCategory } from "@/app/types/features/project";
import TbPresentation from "@/components/icons/TbPresentation";
import TbFolder from "@/components/icons/TbFolder";
import { defaultBadgeCategories } from "./badge";
import TbMapPin from "@/components/icons/TbMapPin";
import TbCalendar from "@/components/icons/TbCalendar";
import TbUser from "@/components/icons/TbUser";
import TbCalendarCheck from "@/components/icons/TbCalendarCheck";

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
            status: 'in-progress',
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
                    label: 'in-progress',
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
            status: 'delayed',
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
                    label: 'delayed',
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
            status: 'completed',
            budget: Math.random() * 100000,
            startDate: new Date('2023-11-14'),
            badges: [

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
            status: 'canceled',
            budget: Math.random() * 100000,
            startDate: new Date('2021-06-14')
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
            status: 'under-review',
            budget: Math.random() * 100000,
            startDate: new Date('2023-03-15'),
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
            status: 'needs-attention',
            budget: Math.random() * 100000,
            startDate: new Date('2022-12-23')
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