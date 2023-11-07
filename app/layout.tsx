import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils/misc';
import { FC, ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ontax',
  description: 'Your business, our priority.'
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'min-w-screen min-h-screen bg-white dark:bg-gray-950 antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
