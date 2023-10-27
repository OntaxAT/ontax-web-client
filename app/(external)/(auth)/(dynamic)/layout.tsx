'use client';

import { FC } from 'react';
import ThemeMenu from '@/components/theme/theme-menu';
import { ILayoutProps } from '@/app/types/layouts';
import Ontax from '@/components/icons/Ontax';
const AuthLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen relative">
      <div className="container w-11/12 h-[600px] sm:w-auto rounded-2xl shadow-xl p-0 overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black relative">
        <div className="flex items-center text-foreground h-full p-5 px-3 sm:px-10">
          <div className="flex justify-center w-full absolute top-5 sm:-ml-10">
            <Ontax width={40} height={40} className="inline-block align-middle" />
          </div>
          <div className="py-3 -mt-5">{children}</div>
          <ThemeMenu className="hidden sm:block sm:absolute bottom-5 right-5" variant="ghost" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
