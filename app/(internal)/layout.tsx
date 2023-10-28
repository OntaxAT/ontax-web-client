import { FC, ReactNode } from 'react';
import InternalTopNav from './components/InternalTopNav';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <InternalTopNav />
      {children}
    </>
  );
};

export default RootLayout;
