import { FC, ReactNode, useEffect, useState } from 'react';

import TrendCards from '../TrendCards';
import TbMoodUp from '@/components/icons/TbMoodUp';
import { IIconProps } from '@/components/icons/types/icons';
import TbCalendarStats from '@/components/icons/TbCalendarStats';
import TbArrowsExchange2 from '@/components/icons/TbArrowsExchange2';
import TbHeartHandshake from '@/components/icons/TbHeartHandshake';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Area, AreaChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';

type TChartData = {
  name: string;
  office: number;
  remote: number;
};

const emptyCardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount?: string; comparison: { value?: number; label: string } };
}> = [
  {
    title: 'Total Employees',
    icon: TbHeartHandshake,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Attendance Rate',
    icon: TbCalendarStats,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Workplace Satisfaction',
    icon: TbMoodUp,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Turnover Rate',
    icon: TbArrowsExchange2,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  }
];

const loadedCardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount?: string; comparison: { value?: number; label: string } };
}> = [
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
];

/**
 * Employees tab for the dashboard
 */
const EmployeesTab: FC = () => {
  const [trendData, setTrendData] = useState(emptyCardItems);
  const [chartData, setChartData] = useState<TChartData[]>();

  useEffect(() => {
    setTimeout(() => {
      setTrendData(loadedCardItems);
      setChartData([
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
      ]);
    }, 2000);
  }, []);

  let chart: ReactNode = null;
  if (chartData) {
    if (chartData.length > 0) {
      chart = (
        <div className="-ml-7">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorOffice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRemote" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              <Area
                type="monotone"
                dataKey="office"
                stroke="#1d4ed8"
                fillOpacity={1}
                fill="url(#colorOffice)"
              />
              <Area
                type="monotone"
                dataKey="remote"
                stroke="#f97316"
                fillOpacity={1}
                fill="url(#colorRemote)"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
    } else {
      chart = (
        <div className="flex flex-1 justify-center items-center h-full text-muted-foreground text-sm">
          - No data available -
        </div>
      );
    }
  } else {
    chart = <Skeleton className="w-full h-full" />;
  }

  return (
    <div className="flex flex-col h-full gap-5">
      <TrendCards data={trendData} iconClassName="group-hover:text-blue-500" />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-10 h-auto overflow-hidden">
        <Card className="flex flex-col h-[440px]">
          <CardHeader>
            <h3 className="font-semibold leading-none tracking-tight">Workplace Presence</h3>
          </CardHeader>
          <CardContent className="flex-1 p-6 pt-0">{chart}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeesTab;
