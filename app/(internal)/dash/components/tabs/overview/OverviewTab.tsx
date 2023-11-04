import { useTheme } from 'next-themes';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProjectsOverviewCard from './ProjectsOverviewCard';
import TrendCards from '../TrendCards';
import TbArrowBarBoth from '@/components/icons/TbArrowBarBoth';
import TbAsset from '@/components/icons/TbAsset';
import TbCash from '@/components/icons/TbCash';
import TbMoodUp from '@/components/icons/TbMoodUp';
import { IIconProps } from '@/components/icons/types/icons';
import { TTrendCard } from '../../../types/trendCard';
import { Skeleton } from '@/components/ui/skeleton';

type TChartData = {
  name: string;
  ocf: number;
  icf: number;
  fcf: number;
};

const emptyCardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount?: string; comparison: { value?: number; label: string } };
}> = [
  {
    title: 'Total Revenue',
    icon: TbCash,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Profit Margins',
    icon: TbArrowBarBoth,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Customer Retention Rate',
    icon: TbMoodUp,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Work Efficiency',
    icon: TbAsset,
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
];

/**
 * Overview tab for the dashboard
 */
const OverviewTab: FC = () => {
  const [trendData, setTrendData] = useState<TTrendCard[]>(emptyCardItems);
  const [chartData, setChartData] = useState<TChartData[]>();
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setTrendData(loadedCardItems);
      setChartData([
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
      ]);
    }, 2000);
  }, []);

  let chart: ReactNode = null;
  if (chartData) {
    if (chartData.length > 0) {
      const chartFcfColor =
        theme === 'dark'
          ? { ocf: '#1d4ed8', icf: '#3b82f6', fcf: '#93c5fd' }
          : { ocf: '#1e40af', icf: '#2563eb', fcf: '#3b82f6' };
      chart = (
        <div className="-ml-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} fontSize={12} unit="$" />
              <Legend />
              <Bar
                name="Operating"
                dataKey="ocf"
                stackId="a"
                fill={chartFcfColor.ocf}
                className="fill-blue-700 dark:fill-blue-800"
              />
              <Bar
                name="Investing"
                dataKey="icf"
                stackId="a"
                fill={chartFcfColor.icf}
                className="fill-blue-500 dark:fill-blue-600"
              />
              <Bar
                name="Financial"
                dataKey="fcf"
                stackId="a"
                fill={chartFcfColor.fcf}
                className="fill-blue-400 dark:fill-blue-500"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
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
      <TrendCards data={trendData} iconClassName="group-hover:text-white" />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-10 h-auto overflow-hidden">
        <Card className="flex flex-col h-[440px]">
          <CardHeader>
            <h3 className="font-semibold leading-none tracking-tight">Cash Flow</h3>
          </CardHeader>
          <CardContent className="flex-1 p-6 pt-0">{chart}</CardContent>
        </Card>
        <ProjectsOverviewCard />
      </div>
    </div>
  );
};

export default OverviewTab;
