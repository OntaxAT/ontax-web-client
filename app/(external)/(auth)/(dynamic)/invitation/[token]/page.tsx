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
import Image from 'next/image';

const ExpiredToken: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  return (
    <>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        <div className="flex flex-col space-y-2 text-center">
          <div className="grid gap-6">
            <div className="grid gap-4">
              <Image
                src="/finvo_logo.png"
                width={50}
                height={50}
                alt="Company logo"
                className="mx-auto hover:scale-110 transition-transform"
              />
              <div className="grid gap-2">
                <h1 className="text-2xl font-semibold">Join Finvo</h1>
                <div className="text-sm text-muted-foreground px-10">
                  <p>You have been invited to join Finvo.&nbsp;</p>
                  {!isAuthenticated && <p>Please create an account to continue.</p>}
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Link href="/sign-in?invid=32947838uerfipo" variant="button">
                Accept invitation
              </Link>
              <p className="text-sm text-muted-foreground px-10">
                {isAuthenticated &&
                  'Accepting this invitation will add your account to the organization'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpiredToken;
