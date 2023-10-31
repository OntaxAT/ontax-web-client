import { cn } from '@/lib/utils/misc';
import { VariantProps, cva } from 'class-variance-authority';
import { default as NextLink } from 'next/link';
import { ComponentProps, forwardRef } from 'react';

const linkVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'underline underline-offset-4 hover:text-primary',
      button:
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2',
      hoverButton:
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

Link.displayName = 'Link';

export default Link;
