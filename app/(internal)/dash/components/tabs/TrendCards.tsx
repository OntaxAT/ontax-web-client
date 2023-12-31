import { FC, ReactNode } from 'react';

import TbCash from '@/components/icons/TbCash';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TTrendCard } from '../../types/trendCard';
import TrendCard from '@/components/ui/trend-card/TrendCard';
import { TAsyncData } from '@/app/types/data/data';

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
  data: TAsyncData<TTrendCard[]> | TTrendCard[];
  iconClassName?: string;
}

/**
 * Trend cards for the overview tab
 */
const TrendCards: FC<ITrendCardProps> = ({ data, iconClassName }) => {
  let cards: ReactNode = null;

  let cardData: TTrendCard[] = [];
  if ('state' in data) {
    if (data.state !== 'success') {
      cards = Array.from({ length: 4 }).map((_, i) => <TrendCard key={i} data={undefined} />);
    } else if (data.data) {
      cardData = data.data;
    }
  } else {
    cardData = data;
  }

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-7">
      {cards ??
        cardData.map((item, index) => (
          <TrendCard key={index} data={item} iconClassName={iconClassName} />
        ))}
    </div>
  );
};

export default TrendCards;
