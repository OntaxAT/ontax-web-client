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

type InputFields = {
  password: string;
};

const ResetPassword: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InputFields>();

  const onSubmit: SubmitHandler<InputFields> = data => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Enter new password</h1>
          <p className="text-sm text-muted-foreground px-10">We won't tell anyone</p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="text-center grid gap-5">
              <div className="grid gap-3 text-left">
                <div className="grid gap-1">
                  <div
                    className={cn(
                      'flex justify-between w-full border border-input dark:border-gray-800 h-9 pl-3 pr-2 py-1 rounded-md shadow-sm text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
                      errors.password && 'ring-red-500 ring-1',
                      isPasswordFocused && 'ring-1 ring-ring'
                    )}
                  >
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={
                        'h-full outline-none w-[87%] text-sm focus-visible:outline-none bg-transparent placeholder:text-muted-foreground'
                      }
                      placeholder="Password"
                      {...register('password', { required: true, minLength: 3 })}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                    />
                    <button
                      type="button"
                      className="hover:bg-accent rounded-md px-2 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <TbEyeOff className="w-4" /> : <TbEye className="w-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-sm text-red-500 text-left">
                      {errors.password.type === 'minLength'
                        ? 'Password must be at least 3 characters'
                        : 'This field is required'}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid gap-3">
                <Button disabled={isLoading}>
                  {isLoading && <TbLoader className="animate-spin" />}Reset password
                </Button>
                <p className="text-sm text-muted-foreground">
                  Remembered your password?
                  <Link href="/sign-in" className="dark:text-muted-foreground">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
