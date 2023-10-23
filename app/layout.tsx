import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
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
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
