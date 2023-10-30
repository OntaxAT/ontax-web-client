import { FC, ReactNode } from 'react';
import InternalTopNav from './components/top-nav/InternalTopNav';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center h-screen">
      <InternalTopNav />
      <div className="flex flex-col flex-1 mt-[63px] pt-8 px-5 xl:px-0 w-full max-w-7xl">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
