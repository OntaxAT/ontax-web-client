'use client';

import { FC, useState } from 'react';
import Link from '@/components/ui/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SignInForm from '../../../components/SignInForm';

const ExpiredToken: FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        <div className="flex flex-col space-y-2 text-center">
          <div className="grid gap-6">
            <div className="grid gap-4">
              {!showForm && (
                <>
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
                  {isAuthenticated && (
                    <p className="text-sm text-muted-foreground px-10">
                      Accepting this invitation will add your account to the organization
                    </p>
                  )}
                  {isAuthenticated ? (
                    <Link href="/sign-in?invid=32947838uerfipo" variant="button">
                      Accept invitation
                    </Link>
                  ) : (
                    <Button onClick={() => setShowForm(true)}>Create account</Button>
                  )}
                </>
              )}
              {showForm && <SignInForm onSubmit={console.log} className="my-10" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpiredToken;
