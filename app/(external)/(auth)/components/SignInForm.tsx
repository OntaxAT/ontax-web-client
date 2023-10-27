import TbEye from '@/components/icons/TbEye';
import TbEyeOff from '@/components/icons/TbEyeOff';
import TbLoader from '@/components/icons/TbLoader';
import Jaen from '@/components/icons/snek';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from '@/components/ui/link';
import { cn, validateEmail } from '@/lib/utils';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type SignInFormFields = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

interface ISignInFormProps {
  onSubmit: SubmitHandler<SignInFormFields>;
  showLogInLink?: boolean;
  className?: string;
  disabledFields?: { [key in keyof SignInFormFields]?: boolean };
  defaultValues?: Partial<SignInFormFields>;
}

/**
 * Sign in form component
 */
const SignInForm: FC<ISignInFormProps> = ({
  onSubmit,
  showLogInLink,
  className,
  disabledFields,
  defaultValues
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormFields>({ defaultValues });

  /**
   * Initiate submit
   */
  const initSubmit = async (data: SignInFormFields) => {
    setIsLoading(true);
    // Since default values are not set in the form state, we need to merge them manually if they haven been changed by the user
    if (defaultValues) {
      for (const key in data) {
        const defaultValue = defaultValues[key as keyof typeof defaultValues];
        if (data[key as keyof typeof data] === undefined && defaultValue !== undefined) {
          data[key as keyof typeof data] = defaultValue;
        }
      }
    }

    await onSubmit(data);
    setIsLoading(false);
  };

  return (
    <div className={cn('grid gap-6', className)}>
      <form onSubmit={handleSubmit(initSubmit)} noValidate>
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
                  {...register('firstname', {
                    required: true,
                    minLength: 3,
                    disabled: disabledFields?.firstname
                  })}
                />
                <label htmlFor="lastname" className="text-sm text-muted-foreground sr-only">
                  Lastname
                </label>
                <Input
                  type="text"
                  className={cn(errors.lastname && 'ring-red-500 ring-1')}
                  placeholder="Brooks"
                  autoComplete="family-name"
                  {...register('lastname', {
                    required: true,
                    minLength: 3,
                    disabled: disabledFields?.lastname
                  })}
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
                {...register('email', {
                  required: true,
                  validate: validateEmail,
                  disabled: disabledFields?.email
                })}
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
                  {...register('password', {
                    required: true,
                    minLength: 3,
                    disabled: disabledFields?.password
                  })}
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
            {showLogInLink && (
              <p className="text-sm text-muted-foreground">
                Already have an account? <Link href="/log-in">Log in</Link>
              </p>
            )}
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
  );
};

export default SignInForm;
