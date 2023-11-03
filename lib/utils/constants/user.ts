import { TUser, TUserBadge, TUserBadgeCategory } from "@/app/types/features/user";
import TbBackpack from "@/components/icons/TbBackpack";
import TbFolder from "@/components/icons/TbFolder";
import TbIdBadge2 from "@/components/icons/TbIdBadge2";
import TbMapPin from "@/components/icons/TbMapPin";
import TbUser from "@/components/icons/TbUser";

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
                    label: 'Marketing'
                }
            ]
        },
        email: 'josh.torno@ontax.com',
        role: 'manager'
    },
    {
        id: 'b460970b-f512-4585-a3fa-f6c0161de80c',
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
                }
            ],
            bio: 'Mixing creativity with strategy to turn project challenges into opportunities for growth.'
        },
        email: 'madison.price@ontax.com',
        role: 'manager'
    },
    {
        id: 'b460970b-f512-4585-a3fa-f6c0161de80c',
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
                }
            ],
            bio: 'Passionate about project success, empowering teams, and the occasional spontaneous dance break.'
        },
        email: 'tate.keller@ontax.com',
        role: 'manager'
    },
    {
        id: 'b460970b-f512-4585-a3fa-f6c0161de80c',
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
            bio: 'Driven by results, coffee, and the belief that every project is a chance to make a positive impact.'
        },
        email: 'mega.joney@ontax.com',
        role: 'manager'
    },
    {
        id: 'b460970b-f512-4585-a3fa-f6c0161de80c',
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
            bio: "Striving for project excellence while embracing the motto 'work hard, play hard' to achieve remarkable outcomes."
        },
        email: 'jack.lorey@ontax.com',
        role: 'manager'
    }
]

export const defaultUserBadges: TUserBadge[] = [
    {
        label: 'User',
        category: 'type'
    }
]