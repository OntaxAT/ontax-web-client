import { TTeam } from "@/app/types/features/team";
import { users } from "./user";

/**
 * Placeholder teams until we fetch them from the server
 */
export const teams: TTeam[] = [
    {
        id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
        department: 'Marketing',
        name: 'Marketing Team 1',
        description: 'This is a team',
        members: [users[0], users[1]],
        avatarUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=MT1'
    },
    {
        id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
        department: 'Research and Development',
        name: 'Research and Development Team 1',
        description: 'This is a team',
        members: [users[2], users[3]],
        avatarUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=RDT1'
    },
    {
        id: '0bfc7a7c-a14b-4514-85b0-c7c7b857051c',
        department: 'Sales',
        name: 'Sales Team 1',
        description: 'This is a team',
        members: [users[4], users[5]],
        avatarUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=ST1'
    }
];