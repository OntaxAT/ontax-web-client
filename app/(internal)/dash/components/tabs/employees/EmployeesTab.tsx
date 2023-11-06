import { FC, ReactNode } from 'react';

import TrendCards from '../TrendCards';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Area, AreaChart, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton';
import PerformanceOverviewCard from './PerformanceOverviewCard';
import { useAppStore } from '@/app/store/store';

type TChartData = {
  name: string;
  office: number;
  remote: number;
};

/**
 * Employees tab for the dashboard
 */
const EmployeesTab: FC = () => {
  const trendData = useAppStore(state => state.dash.employees.trendCards);
  const chartData = useAppStore(state => state.dash.employees.chart);
  const performanceData = useAppStore(state => state.dash.employees.performers);

  let chart: ReactNode = null;
  if (chartData?.data && chartData.state === 'success') {
    if (chartData.data.length > 0) {
      chart = (
        <div className="-ml-7">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={chartData.data}>
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
        <PerformanceOverviewCard data={performanceData} />
      </div>
    </div>
  );
};

export default EmployeesTab;
