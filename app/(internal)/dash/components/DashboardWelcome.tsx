import { currentUser } from '@/lib/constants/user';
import { FC, ReactNode, memo, useEffect, useState } from 'react';

const greetings = [
  'Welcome back',
  'Hello',
  'Good to see you',
  "Glad you're here",
  'Nice to see you',
  'Welcome'
];

const messages: string[] = [
  // Positive messages
  'The business is flourishing, check the financial and projects tab for more information.',
  'The recent product launch was a success, check the projects tab for more information.',
  'Customer feedback has been overwhelmingly positive, check the notifications tab for more information.',
  'Projects have been running smoothly, check the projects tab to track their progress.',
  "The team's collaborative efforts have been paying off, leading to strong project outcomes.",
  // Negativ messages
  'The company is facing some challenges, check the financial reports and the employees tab for more information.',
  'The recent product launch is slightly behind the expectations, check the projects tab for more information.',
  "Some customer feedback wasn't positive, check the notifications tab for more information.",
  'Projects have faced some hiccups, check the projects tab for more information.',
  'Customer satisfaction has dipped somewhat, check the clients area for more information.'
];

/**
 * Dynamic welcome message on the dashboard (memoized)
 */
const DashboardWelcome: FC = () => {
  const [msg, setMsg] = useState<ReactNode>();

  useEffect(() => {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    setMsg(
      <>
        {greeting},&nbsp;<span className="font-bold">{currentUser.details.firstName}</span>!&nbsp;
        {messages[Math.floor(Math.random() * messages.length)]}
      </>
    );
  }, []);

  return (
    <div className="grid gap-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
      <p className="text-muted-foreground">{msg}</p>
    </div>
  );
};

export default memo(DashboardWelcome);
