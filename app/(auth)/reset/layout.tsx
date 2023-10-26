'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeMenu from '@/components/theme/theme-menu';
import { ILayoutProps } from '@/app/types/layouts';
const AuthLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen relative">
      <div className="container min-h-[360px] h-1/2 max-h-[500px] w-auto rounded-2xl shadow-xl p-0 overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
        <div className="dark:bg-black text-foreground h-full p-5 px-10 relative">
          <div className="flex justify-center w-full absolute left-0">
            <Image
              src="/ontax_logo_transparent_white.svg"
              alt="Ontax branding"
              width={40}
              height={40}
              className="inline-block align-middle"
            />
          </div>
          <div className="flex items-center h-full">{children}</div>
          <ThemeMenu className="hidden sm:block sm:absolute bottom-5 right-5" variant="ghost" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
