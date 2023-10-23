'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TbLoader from '@/components/icons/TbLoader';
import TbGitHub from '@/components/icons/TbGithub';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Jaen from '@/components/icons/snek';

const SignIn: FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      <Link
        href="/sign-up"
        className="absolute top-8 right-8 px-4 py-2 rounded-md inline-flex items-center text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent transition-colors"
      >
        Login
      </Link>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Create an account</h1>
          <p className="text-sm text-gray-500 px-10">Enter your email below to get started</p>
        </div>
        <div className="grid gap-6">
          <form action="">
            <div className="text-center grid gap-2">
              <div className="grid gap-1">
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  className="w-full border border-input h-9 px-3 py-1 rounded-md shadow-sm text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="emily.brooks@ontax.com"
                />
              </div>
              <button className="w-full rounded-md transition-colors bg-primary hover:bg-gray-800 text-primary-foreground px-4 py-2">
                Sign In with Email
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
          <button className="w-full rounded-md bg-transparent tansition-colors text-primary hover:bg-accent px-4 py-2 border border-input text-sm inline-flex items-center justify-center font-[500]">
            <Jaen className="stroke-primary h-4 w-4 mr-2" />
            Jaen
          </button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By signin in, you agree to our
            <br />
            <a className="underline underline-offset-4 hover:text-primary">Terms of Service</a>
            &nbsp; and &nbsp;
            <a className="underline underline-offset-4 hover:text-primary">Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
