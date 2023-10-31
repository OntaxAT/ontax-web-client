import { useTheme } from 'next-themes';
import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Button, ButtonProps, buttonVariants } from '../ui/button';
import TbSun from '../icons/TbSun';
import TbMoon from '../icons/TbMoon';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/misc';

interface IThemeMenuProps {
  className?: string;
  variant?: ButtonProps['variant'];
}
/**
 * Menu for changing the theme
 */
const ThemeMenu: FC<IThemeMenuProps> = ({ className, variant = 'outline' }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size="sm"
          className={cn('focus-visible:ring-transparent', className)}
        >
          <TbSun className="dark:hidden h-[1.2em] w-[1.2em]" />
          <TbMoon className="hidden dark:block h-[1.2em] w-[1.2em]" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')} className="flex items-center space-x-2">
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} className="flex items-center space-x-2">
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="flex items-center space-x-2"
        >
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeMenu;
