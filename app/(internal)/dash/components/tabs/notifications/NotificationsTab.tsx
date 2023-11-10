import NotificationCard from '@/components/features/notification/NotificationCard';
import NotificationDataTable from '@/components/features/notification/NotificationDataTable';
import { notifications } from '@/lib/constants/notification';
import { FC } from 'react';

/**
 * Notifications tab for the dashboard
 */
const NotificationsTab: FC = () => {
  return (
    <div className="mt-7 grid gap-y-5">
      {notifications.map(notification => (
        <NotificationCard key={notification.id} data={notification} />
      ))}
      {/* <NotificationDataTable /> */}
    </div>
  );
};

export default NotificationsTab;
