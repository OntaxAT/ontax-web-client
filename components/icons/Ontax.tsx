import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import { FC, memo } from 'react';

const Ontax: FC<Omit<ImageProps, 'src' | 'alt'> & { variant?: 'light' | 'dark' }> = ({
  variant,
  ...props
}) => {
  const { resolvedTheme: theme } = useTheme();

  if (variant === 'light' || theme === 'dark') {
    return <Image src="/ontax_logo_transparent_white.svg" alt="Ontax branding" {...props} />;
  }

  return <Image src="/ontax_logo_transparent.svg" alt="Ontax branding" {...props} />;
};
Ontax.displayName = 'Ontax Logo';

export default memo(Ontax);
