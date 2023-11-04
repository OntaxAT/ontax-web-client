import { TTeam, TTeamBadge, TTeamBadgeCategory } from "@/app/types/features/team";
import { users } from "./user";
import TbUsers from "@/components/icons/TbUsers";
import TbMapPin from "@/components/icons/TbMapPin";
import TbUsersGroup from "@/components/icons/TbUsersGroup";
import TbIdBadge2 from "@/components/icons/TbIdBadge2";
import TbFolder from "@/components/icons/TbFolder";

/**
 * Placeholder teams until we fetch them from the server
 */
export const teams: TTeam[] = [
    {
        id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
        department: 'Marketing',
        name: 'Marketing Team 1',
        username: 'marketing-team-1',
        description: 'This is a team',
        members: [users[0], users[1]],
        leader: users[0],
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=MT1',
            badges: [
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'Marketing',
                    category: 'department'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: (Math.random() * 20).toFixed(0),
                    category: 'member-count'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'Paris',
                    category: 'location'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'MT-43',
                    category: 'internal-id'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'Marketing',
                    category: 'type'
                },
            ]
        }
    },
    {
        id: 'b556f679-9d22-4d36-a972-3e8df6eaa535',
        department: 'Research and Development',
        name: 'Research and Development Team 1',
        username: 'rd-team-1',
        description: 'This is a team',
        members: [users[2], users[3]],
        leader: users[2],
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=RDT1',
            badges: [
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'Research and Development',
                    category: 'department'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: (Math.random() * 20).toFixed(0),
                    category: 'member-count'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'London',
                    category: 'location'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'RD-3',
                    category: 'internal-id'
                }
            ]
        }
    },
    {
        id: '28480ede-5bab-4610-a422-85a78318cc66',
        department: 'Sales',
        name: 'Sales Team 1',
        username: 'sales-team-1',
        description: 'This is a team',
        members: [users[4], users[5]],
        leader: users[4],
        details: {
            avatarUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=ST1',
            badges: [
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'Sales',
                    category: 'department'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: (Math.random() * 20).toFixed(0),
                    category: 'member-count'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'New York',
                    category: 'location'
                },
                {
                    id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
                    label: 'S-12',
                    category: 'internal-id'
                }
            ]
        }
    }
];

/**
 * Categories for team badges
 * They are temporary until we fetch them from the server
 */
export const teamBadgeCategories: TTeamBadgeCategory[] = [
    {
        order: -1,
        type: 'type',
        icon: TbUsersGroup,
    },
    {
        order: 0,
        type: 'internal-id',
        icon: TbIdBadge2
    },
    {
        order: 1,
        type: 'department',
        icon: TbFolder
    },
    {
        order: 2,
        type: 'member-count',
        icon: TbUsers
    },
    {
        order: 3,
        type: 'location',
        icon: TbMapPin,
    }
]

/**
 * Default badges for teams that are always present and cannot be removed
 */
export const defaultTeamBadges: TTeamBadge[] = [
    {
        id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
        label: 'Team',
        category: 'type'
    }
]