'use client';

import * as React from 'react';

import { cn, validateEmail } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TbLoader from '@/components/icons/TbLoader';
import { FC, useState } from 'react';
import Jaen from '@/components/icons/snek';
import { SubmitHandler, useForm } from 'react-hook-form';
import TbEye from '@/components/icons/TbEye';
import TbEyeOff from '@/components/icons/TbEyeOff';
import Link from '@/components/ui/link';

type InputFields = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
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
        href="/log-in"
        className="absolute top-5 right-5 hidden px-4 py-2 rounded-md sm:inline-flex items-center text-sm font-medium text-accent-foreground"
        variant="hoverButton"
      >
        Login
      </Link>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Create an account</h1>
          <p className="text-sm text-muted-foreground px-10">
            Only takes a few seconds, we promise
          </p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="text-center grid gap-5">
              <div className="grid gap-3 text-left">
                <div className="grid gap-1">
                  <div className="grid grid-cols-2 gap-2">
                    <label htmlFor="firstname" className="text-sm text-muted-foreground sr-only">
                      Firstname
                    </label>
                    <Input
                      type="text"
                      className={cn(errors.firstname && 'ring-red-500 ring-1')}
                      placeholder="Emily"
                      autoComplete="given-name"
                      {...register('firstname', { required: true, minLength: 3 })}
                    />
                    <label htmlFor="lastname" className="text-sm text-muted-foreground sr-only">
                      Lastname
                    </label>
                    <Input
                      type="text"
                      className={cn(errors.lastname && 'ring-red-500 ring-1')}
                      placeholder="Brooks"
                      autoComplete="family-name"
                      {...register('lastname', { required: true, minLength: 3 })}
                    />
                  </div>
                  {(errors.firstname || errors.lastname) && (
                    <span className="text-sm text-red-500 text-left">How may we call you?</span>
                  )}
                </div>
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
                  {isLoading && <TbLoader className="animate-spin" />}Create account
                </Button>
                <p className="text-sm text-muted-foreground">
                  Already have an account? <Link href="/log-in">Log in</Link>
                </p>
              </div>
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
          <Button variant="outline" size="sm">
            <Jaen className="stroke-primary h-4 w-4 mr-2" />
            Jaen
          </Button>
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
