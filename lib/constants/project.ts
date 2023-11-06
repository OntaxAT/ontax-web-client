import { Branding1, Branding2, Branding5, Branding4, Branding3 } from "@/components/icons/BrandingPlaceholders";
import { users } from "./user";
import { TProject } from "@/app/types/features/project";

export const projects: TProject[] = [
    {
        id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c72',
        manager: users[0],
        title: 'Olympia',
        details: {
            avatarUrl: Branding1,
            progress: Math.random() * 100,
            status: 'in-progress',
            budget: Math.random() * 100000,
            startDate: new Date('2023-01-01')
        }
    },
    {
        id: 'f477cde3-a54b-48af-9af5-b520cc4ccef2',
        manager: users[1],
        title: 'Mirage',
        details: {
            avatarUrl: Branding2,
            progress: Math.random() * 100,
            status: 'delayed',
            budget: Math.random() * 100000,
            startDate: new Date('2022-08-30')
        }
    },
    {
        id: '5fe8ad16-21d9-4823-8511-2fa583aaa119',
        manager: users[2],
        title: 'Interstellar',
        details: {
            avatarUrl: Branding5,
            progress: Math.random() * 100,
            status: 'completed',
            budget: Math.random() * 100000,
            startDate: new Date('2023-11-14')
        }
    },
    {
        id: '1026f588-90d8-4f20-9461-dfd6c08685a7',
        manager: users[3],
        title: 'Aurora',
        details: {
            avatarUrl: Branding4,
            progress: Math.random() * 100,
            status: 'canceled',
            budget: Math.random() * 100000,
            startDate: new Date('2021-06-14')
        }
    },
    {
        id: '5caeb825-b3da-40c2-ae83-8719f6540ad1',
        manager: users[4],
        title: 'Spectrum',
        details: {
            avatarUrl: Branding3,
            progress: Math.random() * 100,
            status: 'under-review',
            budget: Math.random() * 100000,
            startDate: new Date('2023-03-15'),
        }
    },
    {
        id: '6563b992-1b17-4b5c-b07e-732c45c8fc5b',
        manager: users[4],
        title: 'Zephyr',
        details: {
            avatarUrl: Branding1,
            progress: Math.random() * 100,
            status: 'needs-attention',
            budget: Math.random() * 100000,
            startDate: new Date('2022-12-23')
        },
    },
]