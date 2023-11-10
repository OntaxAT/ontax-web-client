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
import { FC, useState } from 'react';
import BusinessSelect from './BusinessSelect';
import TopNavMenu from './TopNavMenu';
import { currentUser } from '@/lib/constants/user';
import { getDisplayName, getInitials } from '@/lib/utils/user';
import TbCopy from '@/components/icons/TbCopy';
import { cn, copyToClipboard } from '@/lib/utils/misc';
import TbCheck from '@/components/icons/TbCheck';
import NotificationPreviewPopover from '@/components/features/notification/NotificationPreviewPopover';

/**
 * Top navigation bar for internal pages
 */
const InternalTopNav: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const copyUsernameToClipboard = () => {
    setIsDisabled(true);
    copyToClipboard(currentUser.username);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };

  const Icon = isDisabled ? TbCheck : TbCopy;

  return (
    <div className="fixed flex justify-center h-16 w-full mx-auto px-5 xl:px-0 border-b bg-white dark:bg-black">
      <div className="flex items-center justify-between w-full px-10">
        <div className="grid grid-flow-col gap-5 shrink-0">
          <Link href="/dash" className="flex items-center space-x-4">
            <Ontax width={30} />
          </Link>
          <BusinessSelect />
        </div>
        <TopNavMenu />
        <div className="flex items-center space-x-4 md:space-x-5 lg:space-x-6">
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full md:w-[100px] lg:w-[150px] xl:w-[250px]"
            />
            <NotificationPreviewPopover />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={currentUser.details.avatarUrl}
                  className="bg-gray-200 dark:bg-gray-800 border"
                />
                <AvatarFallback>{getInitials(currentUser)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-medium leading-none">{getDisplayName(currentUser)}</p>
                  <div
                    className="group flex items-center gap-x-1 cursor-pointer w-fit"
                    onClick={isDisabled ? undefined : copyUsernameToClipboard}
                  >
                    <p className="text-sm leading-none text-muted-foreground group-hover:text-primary transition-colors">
                      @{currentUser.username}
                    </p>
                    <Icon
                      className={cn(
                        'w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity',
                        isDisabled && 'text-green-500'
                      )}
                    />
                  </div>
                  {/* <p className="text-xs leading-none text-muted-foreground">{currentUser.email}</p> */}
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
