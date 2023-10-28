import { FC, ReactNode } from 'react';
import InternalTopNav from './components/InternalTopNav';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <InternalTopNav />
      <div className="flex-1 pt-8 w-full max-w-7xl">{children}</div>
    </div>
  );
};

export default RootLayout;
