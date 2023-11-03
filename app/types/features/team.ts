import { FC } from "react";
import { TUser } from "./user";
import { IIconProps } from "@/components/icons/types/icons";


export type TTeam = {
    id: string;
    name: string;
    avatarUrl?: string;
    description: string;
    members: TUser[];
    department: string; //TODO: This will be dynamic in the future
}