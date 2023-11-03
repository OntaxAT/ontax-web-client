import { TUser } from "./user";
import { TAdressableEntity } from "../entity";
import { TBadge, TBadgeCategory } from "./badge";


export type TTeam = TAdressableEntity & {
    name: string;
    details?: {
        avatarUrl?: string;
        badges?: TTeamBadge[];
    };
    description: string;
    members: TUser[];
    department: string; //TODO: This will be dynamic in the future
}

export type TTeamBadge = TBadge<TTeamBadgeCategory['type'] | TTeamBadgeCategory>;

export type TTeamBadgeCategory = TBadgeCategory<'department' | 'member-count' | 'location' | 'internal-id'>;