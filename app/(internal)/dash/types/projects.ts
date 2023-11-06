import { TAsyncData } from "@/app/types/data/data"
import { TTrendCard } from "./trendCard";
import { TProject } from "@/app/types/features/project";

export type TProjectsChartData = {
    department: string;
    amountProjects: number;
}

export type TProjectsProjectList = {
    amountProjects: number;
    delayedProjects: number;
    items: TProject[];
}

export type TProjectsData = {
    chart: TAsyncData<TProjectsChartData[]>;
    trendCards: TAsyncData<TTrendCard[]>;
    projects: TAsyncData<TProjectsProjectList>;
}