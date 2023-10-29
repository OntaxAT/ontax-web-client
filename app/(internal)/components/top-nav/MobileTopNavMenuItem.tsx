import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { FC } from 'react';
import { navItems } from './TopNavMenu';

/**
 * Top navigation menu item for mobile devices
 */
const MobileTobNavMenuItem: FC = () => {
  return (
    <NavigationMenuItem className="lg:hidden">
      <NavigationMenuTrigger className="text-gray-500">More</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
          {navItems.map((navItem, i) => {
            return <li key={i}>{navItem.label}</li>;
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default MobileTobNavMenuItem;
