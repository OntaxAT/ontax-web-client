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
import SignInForm, { SignInFormFields } from '../../components/SignInForm';

const SignIn: FC = () => {
  const onSubmit: SubmitHandler<SignInFormFields> = async data => {
    return new Promise(resolve => {
      console.log('form data', data);
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
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
          <SignInForm onSubmit={onSubmit} showLogInLink />
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
