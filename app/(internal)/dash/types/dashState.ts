import { TOverviewData } from "./overview";
import { TEmployeesData } from "./employees";
import { TProjectsData } from "./projects";

export interface IDashStateDefinitions {
    overview: TOverviewData;
    employees: TEmployeesData;
    projects: TProjectsData;
    notifications: string | undefined;
}

export interface IDashStateActions {
    fetchOverviewData: () => void;
    fetchEmployeesData: () => void;
    fetchProjectsData: () => void;
    fetchNotificationsData: () => void;
}

export type TDashSlice = IDashStateDefinitions & IDashStateActions;