'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FC, useEffect, useState } from 'react';
import OverviewTab from './components/tabs/overview/OverviewTab';
import EmployeesTab from './components/tabs/employees/EmployeesTab';

type TTab = 'overview' | 'employees' | 'projects' | 'notifications';

const Dashboard: FC = () => {
  const [activeTab, setActiveTab] = useState<TTab>('overview');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    switch (hash) {
      case 'employees':
        setActiveTab('employees');
        break;
      case 'projects':
        setActiveTab('projects');
        break;
      case 'notifications':
        setActiveTab('notifications');
        break;
      default:
        setActiveTab('overview');
    }
  }, []);

  /**
   * Handles tab change by updating the active tab and the hash in the URL
   * @param value The tab value
   */
  const handleTabChange = (value: string) => {
    if (value === activeTab) return;
    window.location.hash = value;
    setActiveTab((value as TTab) ?? 'overview');
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
      <Tabs
        value={activeTab}
        className="flex flex-col flex-1 mt-10"
        onValueChange={handleTabChange}
      >
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
        <TabsContent value="employees" className="flex-1">
          <EmployeesTab />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
