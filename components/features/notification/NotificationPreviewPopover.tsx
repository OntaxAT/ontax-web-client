import { FC, useState } from 'react';

import { ENotificationCategory } from '@/app/types/features/notification';
import TbBell from '@/components/icons/TbBell';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/misc';
import { Tooltip, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

/**
 * Notification button for top navigation bar that opens a popover with notifications
 */
const NotificationPreviewPopover: FC = () => {
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [notificationCategory, setNotificationCategory] = useState<
    ENotificationCategory.CRITICAL | ENotificationCategory.ALERT | ENotificationCategory.OTHER
  >(ENotificationCategory.CRITICAL);

  let notificationColor = undefined;
  let btnColor = undefined;
  let notificationTooltip = undefined;
  if (hasUnreadNotifications) {
    btnColor = 'dark:hover:bg-transparent';
    if (notificationCategory === ENotificationCategory.ALERT) {
      notificationColor = 'bg-yellow-500';
      btnColor += ' hover:border-yellow-500 dark:hover:border-yellow-500';
      notificationTooltip = 'You have unread alerts';
    } else if (notificationCategory === ENotificationCategory.CRITICAL) {
      notificationColor = 'bg-red-500';
      btnColor += ' hover:border-red-500 dark:hover:border-red-500';
      notificationTooltip = 'You have unread critical notifications';
    } else {
      notificationColor = 'bg-green-500';
      btnColor += ' hover:border-green-500 dark:hover:border-green-500';
      notificationTooltip = 'You have unread notifications';
    }
  }

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" className={cn('bg-transparent', btnColor)}>
                <span className="relative">
                  <TbBell className={'w-4 h-4'} />
                  {hasUnreadNotifications && (
                    <span>
                      <span
                        className={cn(
                          'hidden motion-safe:block absolute top-[-1px] right-[-1px] rounded-full w-2 h-2',
                          notificationColor,
                          notificationCategory !== ENotificationCategory.OTHER &&
                            'motion-safe:animate-ping-slow motion-safe:block delay-1000'
                        )}
                      />
                      <span
                        className={cn(
                          'absolute top-[-1px] right-[-1px] rounded-full w-2 h-2 block',
                          notificationColor
                        )}
                      />
                    </span>
                  )}
                </span>
              </Button>
            </TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent alignOffset={100}>{notificationTooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className="absolute -right-5 top-1 bg-black">hi!</PopoverContent>
    </Popover>
  );
};

export default NotificationPreviewPopover;
