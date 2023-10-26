'use client';

import * as React from 'react';

import { FC } from 'react';
import Link from '@/components/ui/link';

const ExpiredToken: FC = () => {
  return (
    <>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        <div className="flex flex-col space-y-2 text-center">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h1 className="text-2xl font-semibold">Expired token</h1>
              <p className="text-sm text-muted-foreground px-10">
                Your token has expired, please request a new one.
              </p>
            </div>
            <Link href="/log-in" variant="button">
              Bring me back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpiredToken;
