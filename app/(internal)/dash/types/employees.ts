import { TAsyncData } from "@/app/types/data/data"
import { TTrendCard } from "./trendCard";
import { TUser } from "@/app/types/features/user";
import { TTeam } from "@/app/types/features/team";

export type TEmployeesChartData = {
    name: string;
    office: number;
    remote: number;
}
export type TEmployeesPerformerList = {
    avg: number;
    items: {
        entity: TUser | TTeam;
        score: number;
        comparison?: number;
    }[];
}

export type TEmployeesData = {
    trendCards: TAsyncData<TTrendCard[]>;
    chart: TAsyncData<TEmployeesChartData[]>;
    performers: TAsyncData<TEmployeesPerformerList>;
}