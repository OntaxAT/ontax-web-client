import TbArrowBarBoth from '@/components/icons/TbArrowBarBoth';
import TbAsset from '@/components/icons/TbAsset';
import TbCash from '@/components/icons/TbCash';
import TbMoodUp from '@/components/icons/TbMoodUp';
import { IIconProps } from '@/components/icons/types/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FC } from 'react';

const cardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount: string; comparison: { value: number; label: string } };
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

/**
 * Overview tab for the dashboard
 */
const OverviewTab: FC = () => {
  return (
    <div className="grid gap-5 mt-7">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cardItems.map((item, index) => {
          const trendColor =
            item.content.comparison.value > 0
              ? 'group-hover:text-green-500'
              : 'group-hover:text-red-500';
          return (
            <Card key={index} className="group hover:scale-[1.02] transition-transform">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{item.content.amount}</p>
                <p className={cn('text-xs text-muted-foreground', trendColor)}>
                  {item.content.comparison.value.toFixed(2)} ${item.content.comparison.label}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewTab;
