import TbBoxSeam from '@/components/icons/TbBoxSeam';
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
import { cn } from '@/lib/utils/misc';
import { usePathname } from 'next/navigation';
import { FC, HTMLAttributes } from 'react';
import MobileTobNavMenuItem from './MobileTopNavMenuItem';
import { IIconProps } from '@/components/icons/types/icons';

type NavLink = {
  label: string;
  labelClassName?: string;
  activeLabelClassName?: string;
  href?: string;
  items?: NavItem[];
  itemsClassName?: {
    title?: HTMLAttributes<HTMLDivElement>['className'];
    description?: HTMLAttributes<HTMLParagraphElement>['className'];
  };
  summary?: {
    title: string;
    titleClassName?: string;
    desription: string;
    icon: FC<IIconProps>;
    iconClassName?: string;
    className?: string;
    backgroundClassName?: string;
  };
  containerClassName?: string;
  menuClassName?: string;
};

type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const navItems: NavLink[] = [
  {
    label: 'Dashboard',
    href: '/dash',
    menuClassName: 'hidden md:block'
  },
  {
    label: 'Employees',
    labelClassName: 'hover:text-blue-500',
    activeLabelClassName: 'text-blue-500',
    href: '/employees',
    summary: {
      title: 'Employees',
      titleClassName: 'text-blue-500',
      desription: 'Manage your employees and their payroll.',
      icon: TbTie,
      iconClassName: 'text-blue-500',
      className: 'row-span-2'
      // backgroundClassName: 'bg-blue-500 to-gray-900'
    },
    items: [
      {
        title: 'Overview',
        href: '/employees/',
        description: "Get an at-a-glance view of your team's details."
      },
      {
        title: 'Payroll',
        href: '/employees/payroll',
        description: 'Manage salaries and compensation efficiently'
      },
      {
        title: 'Timetracking',
        href: '/employees/timetracking',
        description: 'Keep track of work hours and productivity.'
      },
      {
        title: 'Schedules',
        href: '/employees/schedules',
        description: 'Manage your team schedules and shifts.'
      },
      {
        title: 'Surveys',
        href: '/employees/surveys',
        description: 'Create and manage employee surveys and polls.'
      },
      {
        title: 'Analytics',
        href: '/employees/analytics',
        description: 'Get insights into your company workforce.'
      },
      {
        title: 'Performance',
        href: '/employees/performance',
        description: 'Manage employee performance and reviews.'
      }
    ],
    itemsClassName: { title: 'group-hover:text-blue-500 transition-colors' },
    containerClassName: 'grid-cols-3 md:w-[600px] lg:w-[700px]',
    menuClassName: 'hidden md:block'
  },
  {
    label: 'Clients',
    labelClassName: 'hover:text-emerald-500',
    activeLabelClassName: 'text-emerald-500',
    href: '/clients',
    summary: {
      title: 'Clients',
      titleClassName: 'text-emerald-500',
      desription: 'Manage your clients and their billing.',
      icon: TbHeartHandshake,
      iconClassName: 'text-emerald-500',
      className: 'row-span-2'
    },
    items: [
      {
        title: 'Overview',
        href: '/clients',
        description: 'See an overview of your client base'
      },
      {
        title: 'Invoices',
        href: '/clients/invoices',
        description: 'Handle client billing and invoices seamlessly.'
      },
      {
        title: 'Contracts',
        href: '/clients/contracts',
        description: 'Manage your client contracts and agreements.'
      },
      {
        title: 'Projects',
        href: '/clients/projects',
        description: 'Manage your client projects and tasks.'
      }
    ],
    menuClassName: 'hidden md:block',
    itemsClassName: { title: 'group-hover:text-emerald-500 transition-colors' }
  },
  {
    label: 'Projects',
    labelClassName: 'hover:text-cyan-500',
    activeLabelClassName: 'text-cyan-500',
    href: '/projects',
    summary: {
      title: 'Projects',
      titleClassName: 'text-cyan-500',
      desription: 'Manage your company projects and tasks.',
      icon: TbBoxSeam,
      iconClassName: 'text-cyan-500',
      className: 'row-span-2'
    },
    items: [
      {
        title: 'Overview',
        href: '/projects',
        description: 'Get an overview of your company projects.'
      },
      {
        title: 'Budgets',
        href: '/projects/budgets',
        description: 'Manage your company project budgets.'
      },
      {
        title: 'Reports',
        href: '/projects/reports',
        description: 'Generate project reports and statements.'
      },
      {
        title: 'Analytics',
        href: '/projects/analytics',
        description: 'Get insights into your company projects.'
      }
    ],
    itemsClassName: { title: 'group-hover:text-cyan-500 transition-colors' },
    menuClassName: 'hidden md:block'
  },
  {
    label: 'Accounting',
    labelClassName: 'hover:text-amber-500',
    activeLabelClassName: 'text-amber-500',
    href: '/accounting',
    summary: {
      title: 'Accounting',
      titleClassName: 'text-amber-500',
      desription: 'Manage your company finances.',
      icon: TbFileInvoice,
      className: 'row-span-2',
      iconClassName: 'text-amber-500'
    },
    items: [
      {
        title: 'Invoices',
        href: '/accounting/invoices',
        description: "Manage and track your company's invoices"
      },
      {
        title: 'Vouchers',
        href: '/accounting/vouchers',
        description: 'Keep organized records of financial transactions.'
      },
      {
        title: 'Payments',
        href: '/accounting/payments',
        description: 'Monitor and manage your financial payments'
      },
      {
        title: 'Reports',
        href: '/accounting/reports',
        description: 'Generate financial reports and statements.'
      },
      {
        title: 'Taxes',
        href: '/accounting/taxes',
        description: 'Manage your company taxes and deductions.'
      },
      {
        title: 'Analytics',
        href: '/accounting/analytics',
        description: 'Get insights into your company finances.'
      },
      {
        title: 'Exports',
        href: '/accounting/exports',
        description: 'Export your company financial data.'
      }
    ],
    itemsClassName: { title: 'group-hover:text-amber-500 transition-colors' },
    containerClassName: 'grid-cols-3 md:w-[600px] lg:w-[700px]',
    menuClassName: 'hidden lg:block'
  },
  {
    label: 'Inventory',
    labelClassName: 'hover:text-rose-500',
    activeLabelClassName: 'text-rose-500',
    href: '/inventory',
    summary: {
      title: 'Inventory',
      titleClassName: 'text-rose-500',
      desription: 'Manage your company inventory.',
      icon: TbBoxSeam,
      className: 'row-span-2',
      iconClassName: 'text-rose-500'
    },
    items: [
      {
        title: 'Overview',
        href: '/inventory',
        description: 'Get an overview of your company inventory.'
      },
      {
        title: 'Stock',
        href: '/inventory/stock',
        description: 'Manage your company stock and inventory.'
      },
      {
        title: 'Orders',
        href: '/inventory/orders',
        description: 'Manage your company orders and shipping.'
      },
      {
        title: 'Suppliers',
        href: '/inventory/suppliers',
        description: 'Manage your company suppliers and vendors.'
      }
    ],
    itemsClassName: { title: 'group-hover:text-rose-500 transition-colors' },
    menuClassName: 'hidden lg:block'
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
          const isActive = navItem.href && navItem.href === pathname;

          if (!navItem.items || navItem.items?.length === 0) {
            return (
              <NavigationMenuItem key={i} className={navItem.menuClassName}>
                <NavigationMenuLink>
                  <Link
                    href={isActive || !navItem.href ? '#' : navItem.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-gray-500',
                        isActive && 'text-foreground',
                        isActive && navItem.activeLabelClassName
                      )}
                    >
                      {navItem.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={i} className={navItem.menuClassName}>
              <NavigationMenuTrigger
                className={cn(
                  'text-gray-500 transition-colors duration-200 bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-foreground',
                  navItem.labelClassName,
                  isActive && 'text-foreground',
                  isActive && navItem.activeLabelClassName
                )}
              >
                {navItem.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    'grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-2 lg:w-[700px]',
                    navItem.containerClassName
                  )}
                >
                  {navItem.summary && (
                    <li className={cn(navItem.summary.className)}>
                      <div
                        className={cn(
                          'flex items-center h-full w-full rounded-md bg-gradient-to-b from-muted/50 to-muted p-6',
                          navItem.summary.backgroundClassName
                        )}
                      >
                        <div>
                          <navItem.summary.icon
                            className={cn('w-6 h-6', navItem.summary.iconClassName)}
                          />
                          <h3
                            className={cn(
                              'text-lg mb-2 mt-4 font-semibold leading-none transition-colors',
                              navItem.summary.titleClassName
                            )}
                          >
                            {navItem.summary.title}
                          </h3>
                          <p className="text-sm leading-snug text-muted-foreground transition-colors">
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
                        className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div
                          className={cn(
                            'text-sm font-medium leading-none transition-colors',
                            navItem.itemsClassName?.title
                          )}
                        >
                          {item.title}
                        </div>
                        {item.description && (
                          <p
                            className={cn(
                              'line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors',
                              navItem.itemsClassName?.description
                            )}
                          >
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
        <MobileTobNavMenuItem />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TopNavMenu;
