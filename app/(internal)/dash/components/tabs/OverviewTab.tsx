import {
  Branding1,
  Branding2,
  Branding3,
  Branding4,
  Branding5
} from '@/components/icons/BrandingPlaceholders';
import TbArrowBarBoth from '@/components/icons/TbArrowBarBoth';
import TbAsset from '@/components/icons/TbAsset';
import TbCash from '@/components/icons/TbCash';
import TbMoodUp from '@/components/icons/TbMoodUp';
import { IIconProps } from '@/components/icons/types/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const cardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount: string; comparison: { value: number; label: string } };
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

const cashFlowData: Array<{ name: string; ocf: number; icf: number; fcf: number }> = [
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
];

const projects: Array<{
  title: string;
  manager: string;
  avatarUrl: FC<IIconProps>;
  progess: number;
}> = [
  {
    avatarUrl: Branding1,
    manager: 'Josh Torno',
    title: 'Olympia',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding2,
    manager: 'Madison Price',
    title: 'Mirage',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding3,
    manager: 'Jack Lorey',
    title: 'Spectrum',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding4,
    manager: 'Megan Jones',
    title: 'Aurora',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding5,
    manager: 'Tate Keller',
    title: 'Interstellar',
    progess: Math.random() * 100
  }
];

/**
 * Overview tab for the dashboard
 */
const OverviewTab: FC = () => {
  const { theme } = useTheme();

  const chartFcfColor =
    theme === 'dark'
      ? { ocf: '#1d4ed8', icf: '#3b82f6', fcf: '#93c5fd' }
      : { ocf: '#1e40af', icf: '#2563eb', fcf: '#3b82f6' };

  return (
    <div className="flex flex-col h-full gap-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-7">
        {cardItems.map((item, index) => {
          const trendColor =
            item.content.comparison.value > 0
              ? 'group-hover:text-green-600'
              : 'group-hover:text-red-500';
          return (
            <Card key={index} className="group hover:scale-[1.02] transition-transform">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{item.content.amount}</p>
                <p className={cn('text-xs text-muted-foreground transition-colors', trendColor)}>
                  {item.content.comparison.value > 0 ? '+' : ''}
                  {item.content.comparison.value.toFixed(2)} ${item.content.comparison.label}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="h-max grid gap-4 grid-cols-1 md:grid-cols-2 mb-10">
        <Card className="h-fit">
          <CardHeader className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Cash Flow</h3>
          </CardHeader>
          <CardContent className="p-6 pt-0 pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={cashFlowData}>
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
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <h3 className="font-semibold leading-none tracking-tight">Projects Status</h3>
            <p className="text-sm text-muted-foreground">
              All projects got {(Math.random() * 100).toFixed(2)}% closer to completion
            </p>
          </CardHeader>
          {projects.map((project, i) => (
            <CardContent key={i}>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <project.avatarUrl className="w-5 h-5" />
                    <div className="flex flex-col ml-3">
                      <p className="font-semibold">{project.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Project Manager: {project.manager}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">+{project.progess.toFixed(2)}%</p>
                </div>
              </div>
            </CardContent>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
