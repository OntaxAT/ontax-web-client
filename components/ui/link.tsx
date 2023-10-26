import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { default as NextLink } from 'next/link';
import { ComponentProps, forwardRef } from 'react';

const linkVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'underline underline-offset-4 hover:text-primary',
      button:
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent',
      hoverUnderline: 'hover:underline hover:underline-offset-4 hover:text-primary'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

interface ILinkProps extends ComponentProps<typeof NextLink>, VariantProps<typeof linkVariants> {}

/**
 * A wrapper around Next.js' Link component that adds some styles to it.
 */
const Link = forwardRef<HTMLAnchorElement, ILinkProps>(({ className, variant, ...props }, ref) => {
  return <NextLink {...props} className={cn(linkVariants({ variant, className }))} ref={ref} />;
});

export default Link;
