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
import TbArrowsExchange2 from "@/components/icons/TbArrowsExchange2";
import TbCalendarStats from "@/components/icons/TbCalendarStats";
import TbHeartHandshake from "@/components/icons/TbHeartHandshake";
import { teams } from "@/lib/constants/team";
import TbBooks from "@/components/icons/TbBooks";

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
    employees: {
        chart: {
            data: undefined,
            state: 'loading',
        },
        trendCards: {
            data: undefined,
            state: 'loading',
        },
        performers: {
            data: undefined,
            state: 'loading',
        }
    },
    projects: {
        chart: {
            data: undefined,
            state: 'loading',
        },
        projects: {
            data: undefined,
            state: 'loading',
        },
        trendCards: {
            data: undefined,
            state: 'loading',
        }
    },
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
        const prevData = get().dash.employees;
        if (Object.keys(prevData).every(k => prevData[k as keyof typeof prevData].state === "success")) return;
        set(produce((state: TStoreState) => {
            state.dash.employees = {
                chart: {
                    data: [
                        {
                            name: 'Jan',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Feb',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Mar',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Apr',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'May',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Jun',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Jul',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Aug',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Sep',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Oct',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Nov',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        },
                        {
                            name: 'Dec',
                            office: Math.random() * 500,
                            remote: Math.random() * 500
                        }
                    ],
                    state: 'success',
                },
                trendCards: {
                    data: [
                        {
                            title: 'Total Employees',
                            icon: TbHeartHandshake,
                            content: {
                                amount: (Math.random() * 7500).toFixed(0),
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Attendance Rate',
                            icon: TbCalendarStats,
                            content: {
                                amount: `${(Math.random() * 100).toFixed(2)}%`,
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Workplace Satisfaction',
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
                            title: 'Turnover Rate',
                            icon: TbArrowsExchange2,
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
                performers: {
                    data: {
                        avg: Math.random() * 100,
                        items: [
                            {
                                entity: users[0],
                                score: Math.random() * 100,
                                comparison: Math.random() * 100
                            },
                            {
                                entity: teams[0],
                                score: Math.random() * 100,
                                comparison: Math.random() * 100
                            },
                            {
                                entity: teams[1],
                                score: Math.random() * 100,
                                comparison: Math.random() * 100
                            },
                            {
                                entity: teams[2],
                                score: Math.random() * 100,
                                comparison: Math.random() * 100
                            },
                            {
                                entity: users[3],
                                score: Math.random() * 100,
                                comparison: Math.random() * 100
                            }
                        ]
                    },
                    state: 'success',
                }
            }
        }));
    },
    fetchProjectsData: () => {
        const prevData = get().dash.projects;
        if (Object.keys(prevData).every(k => prevData[k as keyof typeof prevData].state === "success")) return;
        set(produce((state: TStoreState) => {
            state.dash.projects = {
                chart: {
                    data: [
                        {
                            department: 'Marketing',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Sales',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'IT',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'HR',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Finance',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Legal',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Operations',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'R&D',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Customer Support',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Product',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Design',
                            amountProjects: Math.floor(Math.random() * 100),
                        },
                        {
                            department: 'Other',
                            amountProjects: Math.floor(Math.random() * 100),
                        }
                    ],
                    state: 'success',
                },
                projects: {
                    data: {
                        amountProjects: Math.random() * 100,
                        delayedProjects: Math.random() * 100,
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
                        ],
                    },
                    state: 'success',
                },
                trendCards: {
                    data: [
                        {
                            title: 'Total Projects',
                            icon: TbBooks,
                            content: {
                                amount: (Math.random() * 7500).toFixed(0),
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Completion Rate',
                            icon: TbCalendarStats,
                            content: {
                                amount: `${(Math.random() * 100).toFixed(2)}%`,
                                comparison: {
                                    value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
                                    label: '% from last month'
                                }
                            }
                        },
                        {
                            title: 'Budget Efficiency',
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
                            title: 'Timeline Adherence',
                            icon: TbArrowsExchange2,
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
                }
            }
        }));
    },
    fetchNotificationsData: () => {
        if (get().dash.notifications) return;
        set(produce(state => {
            state.dash.notifications = 'notifications';
        }));
    },
})