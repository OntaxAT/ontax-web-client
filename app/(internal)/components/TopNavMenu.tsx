import TbFileInvoice from '@/components/icons/TbFileInvoice';
import TbHeartHandshake from '@/components/icons/TbHeartHandshake';
import TbTie from '@/components/icons/TbTie';
import Link from '@/components/ui/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type NavLink = {
  label: string;
  href?: string;
  items?: NavItem[];
  summary?: { title: string; desription: string; icon: FC<IIconProps>; classNames?: string };
};

type NavItem = {
  title: string;
  href: string;
  description?: string;
};

const navItems: NavLink[] = [
  {
    label: 'Dashboard',
    href: '/dash'
  },
  {
    label: 'Employees',
    summary: {
      title: 'Employees',
      desription: 'Manage your employees and their payroll.',
      icon: TbTie,
      classNames: 'row-span-3'
    },
    items: [
      {
        title: 'Overview',
        href: '/dash/employees/',
        description: "Get an at-a-glance view of your team's details."
      },
      {
        title: 'Payroll',
        href: '/dash/payroll',
        description: 'Manage salaries and compensation efficiently'
      },
      {
        title: 'Timetracking',
        href: '/dash/timetracking',
        description: 'Keep track of work hours and productivity.'
      }
    ]
  },
  {
    label: 'Clients',
    summary: {
      title: 'Clients',
      desription: 'Manage your clients and their billing.',
      icon: TbHeartHandshake,
      classNames: 'row-span-2'
    },
    items: [
      {
        title: 'Overview',
        href: '/dash/clients',
        description: 'See an overview of your client base'
      },
      {
        title: 'Invoices',
        href: '/dash/clients/invoices',
        description: 'Handle client billing and invoices seamlessly.'
      }
    ]
  },
  {
    label: 'Accounting',
    summary: {
      title: 'Accounting',
      desription: 'Manage your company finances.',
      icon: TbFileInvoice,
      classNames: 'row-span-3'
    },
    items: [
      {
        title: 'Invoices',
        href: '/dash/accounting/invoices',
        description: "Manage and track your company's invoices"
      },
      {
        title: 'Vouchers',
        href: '/dash/accounting/vouchers',
        description: 'Keep organized records of financial transactions.'
      },
      {
        title: 'Payments',
        href: '/dash/accounting/payments',
        description: 'Monitor and manage your financial payments'
      }
    ]
  }
];

/**
 * Main navigation menu for the top of the page
 */
const TopNavMenu: FC = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((navItem, i) => {
          const isActive = navItem.href === pathname;

          if (!navItem.items || navItem.items?.length === 0) {
            return (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink>
                  <Link
                    href={isActive || !navItem.href ? '#' : navItem.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {navItem.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className={cn('text-gray-500', isActive && 'text-foreground')}>
                {navItem.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {navItem.summary && (
                    <li className={cn(navItem.summary.classNames)}>
                      <div className="flex items-center h-full w-full rounded-md bg-gradient-to-b from-muted/50 to-muted p-6">
                        <div>
                          <navItem.summary.icon className="w-6 h-6" />
                          <h3 className="text-lg mb-2 mt-4 font-semibold leading-none">
                            {navItem.summary.title}
                          </h3>
                          <p className="text-sm leading-snug text-muted-foreground">
                            {navItem.summary.desription}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                  {navItem.items?.map((item, i) => (
                    <NavigationMenuLink asChild key={i}>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                        {item.description && (
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TopNavMenu;
