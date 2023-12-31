import * as React from 'react';

import { cn } from '@/lib/utils/misc';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex bg-transparent ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 w-full border border-input dark:border-gray-800 h-9 px-3 py-1 rounded-md shadow-sm text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
