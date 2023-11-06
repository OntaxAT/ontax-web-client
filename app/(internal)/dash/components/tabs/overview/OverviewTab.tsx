import { useTheme } from 'next-themes';
import { FC, ReactNode } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProjectsOverviewCard from './ProjectsProgressOverviewCard';
import TrendCards from '../TrendCards';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppStore } from '@/app/store/store';

/**
 * Overview tab for the dashboard
 */
const OverviewTab: FC = () => {
  const trendData = useAppStore(state => state.dash.overview.trendCards);
  const chartData = useAppStore(state => state.dash.overview.chart);
  const projectsData = useAppStore(state => state.dash.overview.projects);
  const { theme } = useTheme();

  let chart: ReactNode = null;
  if (chartData?.state === 'success') {
    if (chartData.data && chartData.data.length > 0) {
      const chartFcfColor =
        theme === 'dark'
          ? { ocf: '#1d4ed8', icf: '#3b82f6', fcf: '#93c5fd' }
          : { ocf: '#1e40af', icf: '#2563eb', fcf: '#3b82f6' };
      chart = (
        <div className="-ml-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData.data}>
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
        <ProjectsOverviewCard data={projectsData} />
      </div>
    </div>
  );
};

export default OverviewTab;
