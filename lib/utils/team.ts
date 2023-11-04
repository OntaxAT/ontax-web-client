import { TTeam } from "@/app/types/features/team";

/**
 * Get the URL of a team
 * @param team The team to get the URL of
 * @returns The URL of the team
 */
export const getTeamUrl = (team: TTeam) => {
    return `/team/${team.username}`;
}