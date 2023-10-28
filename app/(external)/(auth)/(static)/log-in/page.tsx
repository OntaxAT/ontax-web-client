'use client';

import { FC, ReactNode, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Link from '@/components/ui/link';
import LogInForm, { LogInFormInputFields } from './components/LogInForm';
import LogIn2FaView from './components/LogIn2FaView';
import { useRouter } from 'next/navigation';

/**
 * The log in page
 */
const LogIn: FC = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [has2FA, setHas2FA] = useState(true);
  const [show2FA, setShow2FA] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<LogInFormInputFields> = data => {
    setIsFormSubmitting(true);
    console.log('form data: ', data);
    setTimeout(() => {
      setIsFormSubmitting(false);
      if (has2FA) setShow2FA(true);
    }, 2000);
  };

  const on2FaSubmit = async (code: string[]): Promise<boolean> => {
    console.log('2fa code: ', code);
    return new Promise(res => {
      setTimeout(() => {
        const isValid = code.join('') === '123456';
        res(isValid);
        if (isValid) {
          router.push('/home');
        }
      }, 2000);
    });
  };

  let content: ReactNode = null;

  if (has2FA && show2FA) {
    content = <LogIn2FaView onSubmit={on2FaSubmit} />;
  } else {
    content = <LogInForm onSubmit={onSubmit} isLoading={isFormSubmitting} />;
  }

  return (
    <>
      <Link
        href="/sign-in"
        className="absolute hidden top-5 right-5 px-4 py-2 rounded-md sm:inline-flex items-center text-sm font-medium text-accent-foreground"
        variant="hoverButton"
      >
        Sign In
      </Link>
      <div className="mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[350px] text-primary dark:text-white">
        {content}
      </div>
    </>
  );
};

export default LogIn;
