'use client';

import Ontax from '@/components/icons/Ontax';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FC } from 'react';
import BusinessSelect from './BusinessSelect';
import TopNavMenu from './TopNavMenu';

/**
 * Top navigation bar for internal pages
 */
const InternalTopNav: FC = () => {
  return (
    <div className="flex justify-center h-16 w-full mx-auto px-5 xl:px-0 border-b">
      <div className="flex items-center justify-between w-full px-10">
        <div className="grid grid-flow-col gap-5 shrink-0">
          <Link href="/dash" className="flex items-center space-x-4">
            <Ontax width={30} />
          </Link>
          <BusinessSelect />
        </div>
        <TopNavMenu />
        <div className="flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full md:w-[100px] lg:w-[150px] xl:w-[250px]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/lorelei/svg?hair=variant41&mouth=happy02"
                  className="bg-gray-200 dark:bg-gray-800 border"
                />
                <AvatarFallback>EB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Emily Brooks</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    emily.brooks@ontax.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                My account <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Settings <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default InternalTopNav;
