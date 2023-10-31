import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import TbEye from '@/components/icons/TbEye';
import TbEyeOff from '@/components/icons/TbEyeOff';
import TbLoader from '@/components/icons/TbLoader';
import Jaen from '@/components/icons/snek';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn, validateEmail } from '@/lib/utils/misc';
import Link from '@/components/ui/link';

const phrases = [
  'Lets get down to business',
  'Lets get things done',
  'Lets get to work',
  'No time to waste',
  'Ready to dive in?',
  'Efficiency starts here',
  'Start now, conquer today',
  'Lets achieve more',
  'Make it happen'
];

export type LogInFormInputFields = {
  email: string;
  password: string;
};

interface ILogInFormProps {
  onSubmit: SubmitHandler<LogInFormInputFields>;
  isLoading?: boolean;
}

/**
 * Log in form view
 */
const LogInForm: FC<ILogInFormProps> = ({ onSubmit, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [phrase, setPhrase] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LogInFormInputFields>();

  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm text-muted-foreground px-10">{phrase}</p>
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
                {isLoading && <TbLoader className="animate-spin" />}Log in
              </Button>
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
        <Link
          href="/forgot-password"
          className="text-center text-sm text-muted-foreground transition-colors"
          variant="hoverUnderline"
        >
          Forgot password?
        </Link>
      </div>
    </>
  );
};

export default LogInForm;
