import { FC, useEffect, useState } from 'react';

import TrendCards from '../TrendCards';
import TbMoodUp from '@/components/icons/TbMoodUp';
import { IIconProps } from '@/components/icons/types/icons';
import TbCalendarStats from '@/components/icons/TbCalendarStats';
import TbArrowsExchange2 from '@/components/icons/TbArrowsExchange2';
import TbHeartHandshake from '@/components/icons/TbHeartHandshake';

const emptyCardItems: Array<{
  title: string;
  icon: FC<IIconProps>;
  content: { amount?: string; comparison: { value?: number; label: string } };
}> = [
  {
    title: 'Total Employees',
    icon: TbHeartHandshake,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Attendance Rate',
    icon: TbCalendarStats,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Workplace Satisfaction',
    icon: TbMoodUp,
    content: {
      comparison: {
        label: '% from last month'
      }
    }
  },
  {
    title: 'Turnover Rate',
    icon: TbArrowsExchange2,
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
    title: 'Total Employees',
    icon: TbHeartHandshake,
    content: {
      amount: (Math.random() * 7500).toFixed(2),
      comparison: {
        value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
        label: '% from last month'
      }
    }
  },
  {
    title: 'Attendance Rate',
    icon: TbCalendarStats,
    content: {
      amount: `${(Math.random() * 100).toFixed(2)}%`,
      comparison: {
        value: Math.random() * 100 * (Math.random() > 0.2 ? 1 : -1),
        label: '% from last month'
      }
    }
  },
  {
    title: 'Workplace Satisfaction',
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
    title: 'Turnover Rate',
    icon: TbArrowsExchange2,
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
 * Employees tab for the dashboard
 */
const EmployeesTab: FC = () => {
  const [trendData, setTrendData] = useState(emptyCardItems);

  useEffect(() => {
    setTimeout(() => {
      setTrendData(loadedCardItems);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col h-full gap-5">
      <TrendCards data={trendData} />
    </div>
  );
};

export default EmployeesTab;
