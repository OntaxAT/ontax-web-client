import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { FC, ReactNode } from 'react';
import TrendCards from '../TrendCards';
import { useAppStore } from '@/app/store/store';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import ProjectsStatusCard from './ProjectsStatusCard';

/**
 * Projects tab for the dashboard
 */
const ProjectsTab: FC = () => {
  const trendData = useAppStore(state => state.dash.projects.trendCards);
  const chartData = useAppStore(state => state.dash.projects.chart);
  const statusData = useAppStore(state => state.dash.projects.projects);

  let chart: ReactNode = null;
  if (chartData?.data && chartData.state === 'success') {
    if (chartData.data.length > 0) {
      chart = (
        <div className="ml-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart layout="vertical" data={chartData.data}>
              <defs>
                <linearGradient id="colorOffice" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0e7490" stopOpacity={1} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                type="number"
                dataKey="amountProjects"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                domain={[0, 'dataMax + 5']}
              />
              <YAxis
                dataKey="department"
                type="category"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                width={70}
              />
              <Bar
                dataKey="amountProjects"
                // fill="#06b6d4"
                fillOpacity={1}
                fill="url(#colorOffice)"
                radius={[0, 5, 5, 0]}
                name="Number of Projects"
              >
                <LabelList
                  dataKey="amountProjects"
                  position="right"
                  className="fill-muted-foreground/50"
                  offset={8}
                />
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    } else {
      <div className="flex flex-1 justify-center items-center h-full text-muted-foreground text-sm">
        - No data available -
      </div>;
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
            <h3 className="font-semibold leading-none tracking-tight">Status Overview</h3>
          </CardHeader>
          <CardContent className="flex-1 p-6 pt-0">{chart}</CardContent>
        </Card>
        <ProjectsStatusCard data={statusData} />
      </div>
    </div>
  );
};

export default ProjectsTab;
