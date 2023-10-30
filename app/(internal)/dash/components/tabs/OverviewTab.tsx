import TbCash from '@/components/icons/TbCash';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FC } from 'react';

const cardItems: Array<{
  title: string;
  icon: FC;
  description: { amount: string; comparison: string };
}> = [
  {
    title: 'Total Revenue',
    icon: TbCash,
    description: {
      amount: `$${(Math.random() * 100000).toFixed(2)}`,
      comparison: `+${(Math.random() * 100).toFixed(2)}% from last month`
    }
  }
];

/**
 * Overview tab for the dashboard
 */
const OverviewTab: FC = () => {
  return (
    <div className="grid gap-5 mt-7">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-">
        {cardItems.map((item, index) => (
          <Card key={index} className="w-max">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description.amount}</CardDescription>
            </CardHeader>
            <CardContent>{item.description.comparison}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OverviewTab;
