import { TTeam } from "@/app/types/features/team";
import { teams } from "../constants/team";

/**
 * Get the URL of a team
 * @param team The team to get the URL of
 * @returns The URL of the team
 */
export const getTeamUrl = (team: TTeam) => {
    return `/team/${team.username}`;
}

/**
 * Fetch a team by its ID
 * @param id The ID of the team to fetch
 * @returns The team with the given ID or undefined if no team was found
 */
export const fetchTeam = async (id: string): Promise<TTeam | undefined> => {
    const team = teams.find(team => team.id === id);
    return team;
}