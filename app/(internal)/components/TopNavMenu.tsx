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
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type NavLink = {
  label: string;
  href?: string;
  items?: NavItem[];
  summary?: { title: string; desription: string; icon: FC<IIconProps>; className?: string };
  containerClassName?: string;
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
      className: 'row-span-2'
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
      },
      {
        title: 'Schedules',
        href: '/dash/schedules',
        description: 'Manage your team schedules and shifts.'
      },
      {
        title: 'Surveys',
        href: '/dash/surveys',
        description: 'Create and manage employee surveys and polls.'
      },
      {
        title: 'Analytics',
        href: '/dash/analytics',
        description: 'Get insights into your company workforce.'
      },
      {
        title: 'Performance',
        href: '/dash/performance',
        description: 'Manage employee performance and reviews.'
      }
    ],
    containerClassName: 'grid-cols-3 md:w-[600px] lg:w-[700px]'
  },
  {
    label: 'Clients',
    summary: {
      title: 'Clients',
      desription: 'Manage your clients and their billing.',
      icon: TbHeartHandshake,
      className: 'row-span-2'
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
      },
      {
        title: 'Contracts',
        href: '/dash/clients/contracts',
        description: 'Manage your client contracts and agreements.'
      },
      {
        title: 'Projects',
        href: '/dash/clients/projects',
        description: 'Manage your client projects and tasks.'
      }
    ]
  },
  {
    label: 'Accounting',
    summary: {
      title: 'Accounting',
      desription: 'Manage your company finances.',
      icon: TbFileInvoice,
      className: 'row-span-2'
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
      },
      {
        title: 'Reports',
        href: '/dash/accounting/reports',
        description: 'Generate financial reports and statements.'
      },
      {
        title: 'Taxes',
        href: '/dash/accounting/taxes',
        description: 'Manage your company taxes and deductions.'
      },
      {
        title: 'Analytics',
        href: '/dash/accounting/analytics',
        description: 'Get insights into your company finances.'
      },
      {
        title: 'Exports',
        href: '/dash/accounting/exports',
        description: 'Export your company financial data.'
      }
    ],
    containerClassName: 'grid-cols-3 md:w-[600px] lg:w-[700px]'
  },
  {
    label: 'Inventory',
    href: '/inventory',
    summary: {
      title: 'Inventory',
      desription: 'Manage your company inventory.',
      icon: TbBoxSeam,
      className: 'row-span-2'
    },
    items: [
      {
        title: 'Overview',
        href: '/dash/inventory',
        description: 'Get an overview of your company inventory.'
      },
      {
        title: 'Stock',
        href: '/dash/inventory/stock',
        description: 'Manage your company stock and inventory.'
      },
      {
        title: 'Orders',
        href: '/dash/inventory/orders',
        description: 'Manage your company orders and shipping.'
      },
      {
        title: 'Suppliers',
        href: '/dash/inventory/suppliers',
        description: 'Manage your company suppliers and vendors.'
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
          const isActive = navItem.href && navItem.href === pathname;

          if (!navItem.items || navItem.items?.length === 0) {
            return (
              <NavigationMenuItem key={i}>
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
                        isActive && 'text-foreground'
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
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className={cn('text-gray-500', isActive && 'text-foreground')}>
                {navItem.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    'grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-2 lg:w-[600px]',
                    navItem.containerClassName
                  )}
                >
                  {navItem.summary && (
                    <li className={cn(navItem.summary.className)}>
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
