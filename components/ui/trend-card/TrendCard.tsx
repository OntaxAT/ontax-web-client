import { FC, ReactNode } from 'react';

import { TTrendCard } from '@/app/(internal)/dash/types/trendCard';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import { cn } from '@/lib/utils/misc';
import TrendCardSkeleton from './TrendCardSkeleton';

interface ITrendCardProps {
  data: TTrendCard;
  iconClassName?: string;
}

/**
 * A card that displays some information about a trend.
 */
const TrendCard: FC<ITrendCardProps> = ({ data, iconClassName }) => {
  if (!data.content.amount || !data.content.comparison.value) {
    return <TrendCardSkeleton />;
  }
  const trendColor =
    data.content.comparison.value > 0 ? 'group-hover:text-green-600' : 'group-hover:text-red-500';

  let icon: ReactNode = null;

  if (data.icon) {
    if (typeof data.icon === 'function') {
      icon = (
        <data.icon
          className={cn('w-4 h-4 text-muted-foreground transition-colors', iconClassName)}
        />
      );
    } else {
      icon = data.icon;
    }
  }

  return (
    <Card className="group hover:scale-[1.02] transition-transform">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{data.title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{data.content.amount}</p>
        <p className={cn('text-xs text-muted-foreground transition-colors', trendColor)}>
          {data.content.comparison.value > 0 ? '+' : ''}
          {data.content.comparison.value.toFixed(2)}
          {data.content.comparison.label}
        </p>
      </CardContent>
    </Card>
  );
};

export default TrendCard;
