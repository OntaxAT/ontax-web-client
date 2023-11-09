import { FC } from 'react';
import { format } from 'date-fns';

import { TNotification } from '@/app/types/features/notification';
import DataTable from '@/components/ui/DataTable';
import { notifications } from '@/lib/constants/notification';
import { ColumnDef } from '@tanstack/react-table';

const columnDef: ColumnDef<TNotification>[] = [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'description',
    header: 'Message'
  },
  {
    accessorKey: 'details.category',
    header: 'Category'
  },
  {
    accessorKey: 'details.timestamp',
    header: 'Timestamp',
    cell: ({ row }) => {
      return <div className="w-max">{format(row.original.details.timestamp, 'MM-dd-yyyy')}</div>;
    }
  }
];

/**
 * Data table for notifications
 */
const NotificationDataTable: FC = () => {
  return <DataTable data={notifications} columns={columnDef} />;
};

export default NotificationDataTable;
