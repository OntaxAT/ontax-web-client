'use client';

import * as React from 'react';

import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
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
          <SignInForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default SignIn;
