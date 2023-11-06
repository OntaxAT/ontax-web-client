import { TAsyncData } from "@/app/types/data/data";
import { TOverviewData } from "./overview";

export interface IDashStateDefinitions {
    overview: TOverviewData;
    employees: string | undefined;
    projects: string | undefined;
    notifications: string | undefined;
}

export interface IDashStateActions {
    fetchOverviewData: () => void;
    fetchEmployeesData: () => void;
    fetchProjectsData: () => void;
    fetchNotificationsData: () => void;
}

export type TDashSlice = IDashStateDefinitions & IDashStateActions;