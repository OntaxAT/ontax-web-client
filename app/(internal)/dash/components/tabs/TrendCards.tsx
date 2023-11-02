import { FC, useEffect, useState } from 'react';

import TbArrowBarBoth from '@/components/icons/TbArrowBarBoth';
import TbAsset from '@/components/icons/TbAsset';
import TbCash from '@/components/icons/TbCash';
import TbMoodUp from '@/components/icons/TbMoodUp';
import { IIconProps } from '@/components/icons/types/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';

const emptyCardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount?: string; comparison: { value?: number; label: string } };
}> = [
  {
    title: 'Total Revenue',
    icon: TbCash,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Profit Margins',
    icon: TbArrowBarBoth,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Customer Retention Rate',
    icon: TbMoodUp,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Work Efficiency',
    icon: TbAsset,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  }
];

const loadedCardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount?: string; comparison: { value?: number; label: string } };
}> = [
  {
    title: 'Total Revenue',
    icon: TbCash,
    content: {
      amount: `$${(Math.random() * 100000).toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`,
      comparison: {
        value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
        label: '% from last month'
      }
    }
  },
  {
    title: 'Profit Margins',
    icon: TbArrowBarBoth,
    content: {
      amount: `${(Math.random() * 100).toFixed(2)}%`,
      comparison: {
        value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
        label: '% from last month'
      }
    }
  },
  {
    title: 'Customer Retention Rate',
    icon: TbMoodUp,
    content: {
      amount: `${(Math.random() * 100).toFixed(2)}%`,
      comparison: {
        value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
        label: '% from last month'
      }
    }
  },
  {
    title: 'Work Efficiency',
    icon: TbAsset,
    content: {
      amount: `${(30 + Math.random() * 70).toFixed(2)}%`,
      comparison: {
        value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
        label: '% from last month'
      }
    }
  }
];

interface ITrendCardSkeletonProps {
  title?: (typeof emptyCardItems)[number]['title'];
  icon?: (typeof emptyCardItems)[number]['icon'];
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

/**
 * Trend cards for the overview tab
 */
const TrendCards: FC = () => {
  const [data, setData] = useState(emptyCardItems);

  useEffect(() => {
    setTimeout(() => {
      setData(loadedCardItems);
    }, 2000);
  }, []);

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
              <item.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{item.content.amount}</p>
              <p className={cn('text-xs text-muted-foreground transition-colors', trendColor)}>
                {item.content.comparison.value > 0 ? '+' : ''}
                {item.content.comparison.value.toFixed(2)} ${item.content.comparison.label}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TrendCards;
