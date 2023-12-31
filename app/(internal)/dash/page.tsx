'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FC, useEffect, useState } from 'react';
import OverviewTab from './components/tabs/overview/OverviewTab';
import EmployeesTab from './components/tabs/employees/EmployeesTab';
import DashboardWelcome from './components/DashboardWelcome';
import { useAppStore } from '@/app/store/store';
import ProjectsTab from './components/tabs/projects/ProjectsTab';
import NotificationsTab from './components/tabs/notifications/NotificationsTab';

type TTab = 'overview' | 'employees' | 'projects' | 'notifications';

const Dashboard: FC = () => {
  const [activeTab, setActiveTab] = useState<TTab>('overview');
  const fetchOverviewData = useAppStore(state => state.dash.fetchOverviewData);
  const fetchEmployeesData = useAppStore(state => state.dash.fetchEmployeesData);
  const fetchProjectsData = useAppStore(state => state.dash.fetchProjectsData);
  const fetchNotificationsData = useAppStore(state => state.dash.fetchNotificationsData);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    handleTabChange(hash || 'overview');
  }, []);

  useEffect(() => {
    switch (activeTab) {
      case 'employees':
        fetchEmployeesData();
        break;
      case 'projects':
        fetchProjectsData();
        break;
      case 'notifications':
        fetchNotificationsData();
        break;
      default:
        fetchOverviewData();
    }
  }, [activeTab]);

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
      <DashboardWelcome />
      <Tabs
        value={activeTab}
        className="flex flex-col flex-1 mt-10"
        onValueChange={handleTabChange}
      >
        <div>
          <TabsList>
            <TabsTrigger
              value="overview"
              className="data-[state=active]:text-primary hover:text-primary"
            >
              Overview
            </TabsTrigger>
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
        <TabsContent value="projects" className="flex-1">
          <ProjectsTab />
        </TabsContent>
        <TabsContent value="notifications" className="flex-1">
          <NotificationsTab />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
