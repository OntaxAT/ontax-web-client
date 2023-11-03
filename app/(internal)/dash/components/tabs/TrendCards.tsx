import { FC } from 'react';

import TbCash from '@/components/icons/TbCash';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import { TTrendCard } from '../../types/trends-card';

interface ITrendCardSkeletonProps {
  title?: TTrendCard['title'];
  icon?: TTrendCard['icon'];
}

/**
 * A skeleton for the trend cards
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

interface ITrendCardProps {
  data: TTrendCard[];
  iconClassName?: string;
}

/**
 * Trend cards for the overview tab
 */
const TrendCards: FC<ITrendCardProps> = ({ data, iconClassName }) => {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-7">
      {data.map((item, index) => {
        if (!item.content.amount || !item.content.comparison.value) {
          return <TrendCardSkeleton key={index} />;
        }
        const trendColor =
          item.content.comparison.value > 0
            ? 'group-hover:text-green-600'
            : 'group-hover:text-red-500';
        return (
          <Card key={index} className="group hover:scale-[1.02] transition-transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              {item.icon && (
                <item.icon
                  className={cn('w-4 h-4 text-muted-foreground transition-colors', iconClassName)}
                />
              )}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.content.amount}</p>
              <p className={cn('text-xs text-muted-foreground transition-colors', trendColor)}>
                {item.content.comparison.value > 0 ? '+' : ''}
                {item.content.comparison.value.toFixed(2)} {item.content.comparison.label}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TrendCards;
