
export interface IDashStateDefinitions {
    overview: string | undefined;
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