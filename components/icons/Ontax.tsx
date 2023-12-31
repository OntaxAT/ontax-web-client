import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';
import { FC, useEffect, useState } from 'react';

const Ontax: FC<Omit<ImageProps, 'src' | 'alt'> & { variant?: 'light' | 'dark' }> = ({
  variant,
  width = 50,
  height = width,
  ...props
}) => {
  const [imgVariant, setImgVariant] = useState<'light' | 'dark'>('light');
  const { resolvedTheme: theme } = useTheme();

  useEffect(() => {
    // We need to set the actual variant later to prevent SSR issues
    if (variant === 'light' || theme === 'dark') {
      setImgVariant('dark');
    }
  }, []);

  if (imgVariant === 'dark') {
    return (
      <Image
        src="/ontax_logo_transparent.svg"
        alt="Ontax branding"
        width={width}
        height={height}
        {...props}
      />
    );
  }

  return (
    <Image
      src="/ontax_logo_transparent_white.svg"
      alt="Ontax branding"
      width={width}
      height={height}
      {...props}
    />
  );
};
Ontax.displayName = 'Ontax Logo';

export default Ontax;
