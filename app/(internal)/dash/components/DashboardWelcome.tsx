import { currentUser } from '@/lib/constants/user';
import { FC, memo, useEffect, useState } from 'react';

const messages: string[] = [
  // Positive messages
  'Welcome back, $u! The business is flourishing, check the financial and projects tab for more information.',
  'Hello, $u! The recent product launch was a success, check the projects tab for more information.',
  'Good to see you, $u! Customer feedback has been overwhelmingly positive, check the notifications tab for more information.',
  "Glad you're here, $u! Projects have been running smoothly, check the projects tab to track their progress.",
  "Nice to see you, $u! The team's collaborative efforts have been paying off, leading to strong project outcomes.",
  // Negativ messages
  'Welcome back, $u! The company is facing some challenges, check the financial reports and the employees tab for more information.',
  'Hello, $u! The recent product launch is slightly behind the expectations, check the projects tab for more information.',
  "Good to see you, $u! Some customer feedback wasn't mostly positive, check the notifications tab for more information.",
  "Glad you're here, $u! Projects have faced some hiccups, check the projects tab for more information.",
  'Nice to see you, $u! Customer satisfaction has dipped somewhat, check the clients area for more information.'
];

/**
 * Dynamic welcome message on the dashboard (memoized)
 */
const DashboardWelcome: FC = () => {
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    setMsg(
      messages[Math.floor(Math.random() * messages.length)].replace(
        '$u',
        currentUser.details.firstName
      )
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
