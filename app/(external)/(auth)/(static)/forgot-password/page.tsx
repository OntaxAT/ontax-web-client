'use client';

import * as React from 'react';

import { cn, validateEmail } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TbLoader from '@/components/icons/TbLoader';
import { FC, useState } from 'react';
import Jaen from '@/components/icons/snek';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import Link from '@/components/ui/link';

type InputFields = {
  email: string;
};

const SignIn: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InputFields>();

  const onSubmit: SubmitHandler<InputFields> = data => {
    setIsLoading(true);
    console.log('form data: ', data);
    setTimeout(() => {
      setIsLoading(false);
      setShowDialog(true);
    }, 2000);
  };

  return (
    <>
      <Link
        href="/log-in"
        className="absolute top-5 right-5 hidden px-4 py-2 rounded-md sm:inline-flex items-center text-sm font-medium text-accent-foreground"
        variant="hoverButton"
      >
        Login
      </Link>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Reset your password</h1>
          <p className="text-sm text-muted-foreground px-10">No worries, we got you covered</p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="text-center grid gap-5">
              <div className="grid gap-3 text-left">
                <div className="grid gap-1">
                  <label className="text-sm text-muted-foreground sr-only">Email</label>
                  <Input
                    type="email"
                    className={errors.email && 'ring-red-500 ring-1'}
                    placeholder="emily.brooks@ontax.com"
                    autoComplete="email"
                    {...register('email', { required: true, validate: validateEmail })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 text-left">
                      {errors.email.type === 'validate'
                        ? 'Please enter a valid email'
                        : 'Please enter your email'}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled={isLoading}>
                        {isLoading && <TbLoader className="animate-spin" />}Reset password
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      We will send you an email with a link to reset your password.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-sm text-muted-foreground">
                  Remembered your password?&nbsp;
                  <Link href="/sign-in" className="dark:text-muted-foreground">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AlertDialog open={showDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>Recovery email is on its way</AlertDialogHeader>
          <AlertDialogDescription>
            We sent you an email with a link to reset your password. Please check your inbox and
            dont forget to check your spam folder as well.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <Button onClick={() => router.push('/log-in')}>Continue</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SignIn;
