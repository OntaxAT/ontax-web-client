'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FC } from 'react';
import OverviewTab from './components/tabs/OverviewTab';

const Dashboard: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
      <Tabs defaultValue="overview" className="flex flex-col flex-1 mt-10">
        <div>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger
              value="employees"
              className="data-[state=active]:text-blue-500 hover:text-blue-500"
            >
              Employees
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:text-cyan-500 hover:text-cyan-500"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:text-orange-500 hover:text-orange-500"
            >
              Notifications
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="flex-1">
          <OverviewTab />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
