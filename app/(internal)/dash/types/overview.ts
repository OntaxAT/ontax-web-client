import { TAsyncData } from "@/app/types/data/data";
import { TTrendCard } from "./trendCard";
import { TProject } from "@/app/types/features/project";

/**
 * Chart data for the overview tab in the dashboard
 */
export type TOverviewChartData = {
    name: string;
    ocf: number;
    icf: number;
    fcf: number;
}

export type TOverviewProjectList = {
    avg: number;
    items: TProject[];
}

/**
 * Data of the overview tab in the dashboard
 */
export type TOverviewData = {
    chart: TAsyncData<TOverviewChartData[]>;
    trendCards: TAsyncData<TTrendCard[]>;
    projects: TAsyncData<TOverviewProjectList>;
};