'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import TbLoader from '@/components/icons/TbLoader';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from '@/components/ui/link';
import TbEye from '@/components/icons/TbEye';
import TbEyeOff from '@/components/icons/TbEyeOff';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useRouter } from 'next/navigation';

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
