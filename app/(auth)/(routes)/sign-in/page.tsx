'use client';

import * as React from 'react';

import { cn, validateEmail } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TbLoader from '@/components/icons/TbLoader';
import TbGitHub from '@/components/icons/TbGithub';
import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Jaen from '@/components/icons/snek';
import { SubmitHandler, useForm } from 'react-hook-form';
import TbEye from '@/components/icons/TbEye';
import TbEyeOff from '@/components/icons/TbEyeOff';

type InputFields = {
  email: string;
  password: string;
};

const SignIn: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

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
    }, 2000);
  };

  return (
    <>
      <Link
        href="/sign-up"
        className="absolute top-8 right-8 px-4 py-2 rounded-md inline-flex items-center text-sm font-medium text-accent-foreground dark:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent transition-colors"
      >
        Login
      </Link>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary-foreground">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Create an account</h1>
          <p className="text-sm text-gray-500 px-10">Only takes a few seconds, we promise</p>
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
                <div className="grid gap-1">
                  <label className="text-sm text-muted-foreground sr-only">Password</label>
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
                        'h-full outline-none w-[87%] text-sm focus-visible:outline-none bg-transparent'
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
              <button
                className="w-full rounded-md transition-colors transiton-opacity bg-primary dark:bg-white hover:bg-gray-800 text-primary-foreground dark:text-primary px-4 py-2 flex justify-center items-center gap-2 disabled:pointer-events-none disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading && <TbLoader className="animate-spin" />}Create account
              </button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or continue with</span>
            </div>
          </div>
          <button className="w-full rounded-md tansition-colors bg-transparent text-primary hover:bg-accent px-4 py-2 border border-input text-sm inline-flex items-center justify-center font-medium">
            <Jaen className="stroke-primary h-4 w-4 mr-2" />
            Jaen
          </button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By signin in, you agree to our
            <br />
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            &nbsp; and &nbsp;
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
