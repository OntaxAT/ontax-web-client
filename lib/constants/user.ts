import { TUser, TUserBadge, TUserBadgeCategory } from "@/app/types/features/user";
import TbBackpack from "@/components/icons/TbBackpack";
import TbFolder from "@/components/icons/TbFolder";
import TbIdBadge2 from "@/components/icons/TbIdBadge2";
import TbMapPin from "@/components/icons/TbMapPin";
import TbUser from "@/components/icons/TbUser";
import TbUsers from "@/components/icons/TbUsers";

/**
 * Categories for user badges
 * They are temporary until we fetch them from the server
 */
export const userBadgeCategories: TUserBadgeCategory[] = [
    {
        order: -1,
        type: 'type',
        icon: TbUser
    },
    {
        order: 2,
        type: 'role',
        // className: 'bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 text-white',
        icon: TbBackpack
    },
    {
        order: 3,
        type: 'department',
        icon: TbFolder
    },
    {
        order: 4,
        type: 'team',
        icon: TbUsers
    },
    {
        order: 1,
        type: 'location',
        icon: TbMapPin,
        iconClassName: "text-primary-foreground/75"
    },
    {
        order: 0,
        type: 'internal-id',
        icon: TbIdBadge2,
        // className: "bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-500 text-white"
    }
]

/**
 * Placeholder users
 */
export const users: TUser[] = [
    {
        id: 'b460970b-f512-4585-a3fa-f6c0161de80c',
        username: 'joto',
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?hair=variant04&mouth=happy02',
            firstName: 'Josh',
            lastName: 'Torno',
            bio: 'Balancing precision and innovation to lead projects to excellence, one milestone at a time.',
            badges: [
                {
                    label: 'New York',
                    category: 'location'
                },
                {
                    label: 'Project Manager',
                    category: 'role'
                },
                {
                    label: 'M-43',
                    category: 'internal-id',
                },
                {
                    category: 'department',
                    label: 'Marketing',
                    referenceId: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c'
                },
                {
                    category: 'team',
                    label: 'Sales',
                    referenceId: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c'
                }
            ],
            performanceScore: 81
        },
        email: 'josh.torno@ontax.com',
        role: 'manager'
    },
    {
        id: '1ec496b0-7111-48df-8077-9a79b756ec9c',
        username: 'madprice',
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?hair=variant13&mouth=happy02',
            firstName: 'Madison',
            lastName: 'Price',
            badges: [
                {
                    label: 'London',
                    category: 'location'
                },
                {
                    label: 'Project Manager',
                    category: 'role'
                },
                {
                    label: 'S-12',
                    category: 'internal-id',
                },
                {
                    category: 'department',
                    label: 'Sales'
                },
                {
                    category: 'team',
                    label: 'Sales',
                    referenceId: '28480ede-5bab-4610-a422-85a78318cc66'
                }
            ],
            bio: 'Mixing creativity with strategy to turn project challenges into opportunities for growth.',
            performanceScore: 92
        },
        email: 'madison.price@ontax.com',
        role: 'manager'
    },
    {
        id: '022c1d0d-aa89-4047-990e-41bb897399ac',
        username: 'takeller',
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?hair=variant45&mouth=happy02',
            firstName: 'Tate',
            lastName: 'Keller',
            badges: [
                {
                    label: 'Los Angeles',
                    category: 'location'
                },
                {
                    label: 'Project Manager',
                    category: 'role'
                },
                {
                    label: 'HR-199',
                    category: 'internal-id',
                },
                {
                    category: 'department',
                    label: 'Human Resources'
                },
            ],
            bio: 'Passionate about project success, empowering teams, and the occasional spontaneous dance break.',
            performanceScore: 73
        },
        email: 'tate.keller@ontax.com',
        role: 'manager'
    },
    {
        id: 'e4c037a7-5986-4878-ba2e-086a012482bb',
        username: 'megjoney',
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?hair=variant29&mouth=happy02',
            firstName: 'Megan',
            lastName: 'Jones',
            badges: [
                {
                    label: 'New York',
                    category: 'location'
                },
                {
                    label: 'Project Manager',
                    category: 'role',
                },
                {
                    label: 'RD-901',
                    category: 'internal-id',
                },
                {
                    category: 'department',
                    label: 'Research and Development'
                }
            ],
            bio: 'Driven by results, coffee, and the belief that every project is a chance to make a positive impact.',
            performanceScore: 87
        },
        email: 'mega.joney@ontax.com',
        role: 'manager'
    },
    {
        id: 'f49871e4-47c4-40b6-a99b-9c4297e9b5e2',
        username: 'jarey',
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?hair=variant12&mouth=happy02',
            firstName: 'Jack',
            lastName: 'Lorey',
            badges: [
                {
                    label: 'New York',
                    category: 'location'
                },
                {
                    label: 'Project Manager',
                    category: 'role'
                },
                {
                    label: 'SCL-77',
                    category: 'internal-id',
                },
                {
                    category: 'department',
                    label: 'Supply Chain and Logistics'
                }
            ],
            bio: "Striving for project excellence while embracing the motto 'work hard, play hard' to achieve remarkable outcomes.",
            performanceScore: 95
        },
        email: 'jack.lorey@ontax.com',
        role: 'manager'
    }
]

/**
 * Placeholder for the currently logged in user
 */
export const currentUser: TUser = {
    id: 'c8726224-4e04-45fe-a14a-014b070725e9',
    username: 'emily',
    details: {
        firstName: 'Emily',
        lastName: 'Brooks',
        avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?hair=variant41&mouth=happy02',
        badges: [
            {
                label: 'San Francisco',
                category: 'location'
            },
            {
                label: 'CEO',
                category: 'role'
            },
            {
                label: 'C-001',
                category: 'internal-id',
            },
            {
                category: 'department',
                label: 'Executive',
                referenceId: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                className: 'bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 text-white'
            },
        ],
        bio: 'Empowering teams to dream big and achieve bigger.',
        performanceScore: 100
    },
    email: 'emily.brooks@ontax.com',
    role: 'owner',
}

/**
 * Default badges for users.
 * They can't be removed or edited.
 */
export const defaultUserBadges: TUserBadge[] = [
    {
        label: 'User',
        category: 'type'
    }
]