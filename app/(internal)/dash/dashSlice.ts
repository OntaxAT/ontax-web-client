import { TStoreSlice } from "@/app/types/store";
import { produce } from "immer";
import { TDashSlice } from "./types/dashState";

export const createDashSlice: TStoreSlice<TDashSlice> = (set, get) => ({
    overview: undefined,
    employees: undefined,
    projects: undefined,
    notifications: undefined,
    fetchOverviewData: () => {
        if (get().dash.overview) return;
        set(produce(state => {
            state.dash.overview = 'overview';
        }));
    },
    fetchEmployeesData: () => {
        if (get().dash.employees) return;
        set(produce(state => {
            state.dash.employees = 'employees';
        }));
    },
    fetchProjectsData: () => {
        if (get().dash.projects) return;
        set(produce(state => {
            state.dash.projects = 'projects';
        }));
    },
    fetchNotificationsData: () => {
        if (get().dash.notifications) return;
        set(produce(state => {
            state.dash.notifications = 'notifications';
        }));
    },
})