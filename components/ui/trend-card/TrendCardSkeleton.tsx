import { FC } from 'react';

import { TTrendCard } from '@/app/(internal)/dash/types/trendCard';
import TbCash from '@/components/icons/TbCash';
import { Card, CardHeader, CardTitle, CardContent } from '../card';
import { Skeleton } from '../skeleton';

interface ITrendCardSkeletonProps {
  title?: TTrendCard['title'];
  icon?: TTrendCard['icon'];
}

/**
 * Skeleton for a trend card
 */
const TrendCardSkeleton: FC<ITrendCardSkeletonProps> = ({ title, icon }) => {
  return (
    <Card className="group hover:scale-[1.02] transition-transform">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        {title ? (
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        ) : (
          <Skeleton className="w-1/3 h-6" />
        )}
        {icon ? (
          <TbCash className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Skeleton className="w-4 h-4" />
        )}
      </CardHeader>
      <CardContent>
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/2 h-3 mt-2" />
      </CardContent>
    </Card>
  );
};

export default TrendCardSkeleton;
