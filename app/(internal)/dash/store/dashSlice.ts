import { TStoreSlice, TStoreState } from "@/app/types/store";
import { produce } from "immer";
import { IDashStateDefinitions, TDashSlice } from "../types/dashState";
import TbArrowBarBoth from "@/components/icons/TbArrowBarBoth";
import TbAsset from "@/components/icons/TbAsset";
import TbCash from "@/components/icons/TbCash";
import TbMoodUp from "@/components/icons/TbMoodUp";
import { wait } from "@/lib/utils/misc";
import { Branding1, Branding2, Branding5, Branding4, Branding3 } from "@/components/icons/BrandingPlaceholders";
import { users } from "@/lib/constants/user";

const initState: IDashStateDefinitions = {
    overview: {
        chart: {
            data: undefined,
            state: 'loading',
        },
        trendCards: {
            data: undefined,
            state: 'loading',
        },
        projects: {
            data: undefined,
            state: 'loading',
        }
    },
    employees: undefined,
    projects: undefined,
    notifications: undefined,
}

export const createDashSlice: TStoreSlice<TDashSlice> = (set, get) => ({
    ...initState,
    fetchOverviewData: async () => {
        const { overview } = get().dash;
        if (Object.keys(overview).every(k => overview[k as keyof typeof overview].state === "success")) return;
        await wait(2000);
        set(produce((state: TStoreState) => {
            state.dash.overview = {
                chart: {
                    data: [
                        {
                            name: 'Jan',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Feb',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Mar',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Apr',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'May',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Jun',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Jul',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Aug',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Sep',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Oct',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Nov',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        },
                        {
                            name: 'Dec',
                            ocf: Math.random() * 10000,
                            icf: Math.random() * 10000,
                            fcf: Math.random() * 10000
                        }
                    ],
                    state: 'success',
                },
                trendCards: {
                    data: [
                        {
                            title: 'Total Revenue',
                            icon: TbCash,
                            content: {
                                amount: `$${(Math.random() * 100000).toLocaleString('en-US', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}`,
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Profit Margins',
                            icon: TbArrowBarBoth,
                            content: {
                                amount: `${(Math.random() * 100).toFixed(2)}%`,
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Customer Retention Rate',
                            icon: TbMoodUp,
                            content: {
                                amount: `${(Math.random() * 100).toFixed(2)}%`,
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Work Efficiency',
                            icon: TbAsset,
                            content: {
                                amount: `${(30 + Math.random() * 70).toFixed(2)}%`,
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        }
                    ],
                    state: 'success',
                },
                projects: {
                    data: {
                        avg: Math.random() * 100,
                        items: [
                            {
                                id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c72',
                                manager: users[0],
                                title: 'Olympia',
                                details: {
                                    avatarUrl: Branding1,
                                    progress: Math.random() * 100
                                }
                            },
                            {
                                id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c73',
                                manager: users[1],
                                title: 'Mirage',
                                details: {
                                    avatarUrl: Branding2,
                                    progress: Math.random() * 100
                                }
                            },
                            {
                                id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c74',
                                manager: users[2],
                                title: 'Interstellar',
                                details: {
                                    avatarUrl: Branding5,
                                    progress: Math.random() * 100
                                }
                            },
                            {
                                id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c72',
                                manager: users[3],
                                title: 'Aurora',
                                details: {
                                    avatarUrl: Branding4,
                                    progress: Math.random() * 100
                                }
                            },
                            {
                                id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c72',
                                manager: users[4],
                                title: 'Spectrum',
                                details: {
                                    avatarUrl: Branding3,
                                    progress: Math.random() * 100
                                }
                            },
                            {
                                id: 'bdf72ba3-11a3-4f1a-a160-bea807d50c72',
                                manager: users[4],
                                title: 'Zephyr',
                                details: {
                                    avatarUrl: Branding1,
                                    progress: Math.random() * 100
                                },
                            },
                        ]
                    },
                    state: 'success',
                },
            }
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