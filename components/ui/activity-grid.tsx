import { TActivityGrid } from '@/app/types/components/ui/activity-grid';
import { FC } from 'react';

interface IActivityGridProps {
  data: TActivityGrid;
}

const ActivityGrid: FC<IActivityGridProps> = ({ data }) => {
  return (
    <div className="flex space-x-2 w-full flex-wrap items-center">
      {data.items.map((item, index) => {
        return <div key={index} className="bg-blue-500 w-2 h-2" />;
      })}
    </div>
  );
};

export default ActivityGrid;
