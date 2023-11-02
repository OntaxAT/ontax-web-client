'use client';

import { TUser, TUserBadgeCategory } from '@/app/types/features/user';
import TbMail from '@/components/icons/TbMail';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { userBadgeCategories } from '@/lib/utils/constants/user';
import { cn } from '@/lib/utils/misc';
import { getDisplayName } from '@/lib/utils/user';
import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface IUserHoverCardProps {
  user: TUser;
  triggerContent: ReactNode;
}

/**
 * A hover card that displays some user information when hovering over the trigger.
 */
const UserHoverCard: FC<IUserHoverCardProps> = ({ user, triggerContent }) => {
  const [isMounted, setIsMounted] = useState(false);
  const displayName = getDisplayName(user);

  useEffect(() => {
    // Since we're using a portal, we cant render the content server-side.
    setIsMounted(true);
  }, []);

  return (
    <HoverCardTrigger>
      {triggerContent}
      {
        // We need this portal because one of the parent elements is a paragraph, which is not allowed to have a div as a child.
        isMounted
          ? createPortal(
              <HoverCardContent
                align="center"
                className="text-sm grid gap-y-4 w-[300px]"
                sideOffset={10}
              >
                <div className="grid gap-y-2">
                  <Avatar className="w-[60px] h-[60px]">
                    <AvatarImage
                      sizes=""
                      src={user.details.avatarUrl}
                      alt={displayName}
                      className=" bg-gray-200 dark:bg-gray-800 border"
                    />
                  </Avatar>
                  <div className="grid gap-y-0">
                    <p className="font-bold">{displayName}</p>
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                  </div>
                </div>
                {user.details.bio && <p>{user.details.bio}</p>}
                {user.details.badges && user.details.badges.length > 0 && (
                  <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
                    {user.details.badges
                      .sort((b1, b2) => {
                        if (b1.category instanceof Object && b2.category instanceof Object) {
                          return b1.category.order - b2.category.order;
                        } else if (
                          typeof b1.category === 'string' &&
                          typeof b2.category === 'string'
                        ) {
                          const category1 = userBadgeCategories.find(c => c.type === b1.category);
                          const category2 = userBadgeCategories.find(c => c.type === b2.category);
                          return category1 && category2 ? category1.order - category2.order : 0;
                        }
                        return 0;
                      })
                      .map((badge, i) => {
                        let predefinedCategory: TUserBadgeCategory | undefined;
                        let badgeCategory: TUserBadgeCategory | undefined;
                        if (badge.category instanceof Object) {
                          badgeCategory = badge.category;
                          predefinedCategory = badge.category
                            ? userBadgeCategories.find(c => c.type === badgeCategory!.type)
                            : undefined;
                        } else if (typeof badge.category === 'string') {
                          badgeCategory = userBadgeCategories.find(c => c.type === badge.category);
                        }

                        const BadgeIcon = predefinedCategory?.icon || badgeCategory?.icon;

                        return (
                          <Badge
                            key={i}
                            className={cn(
                              'flex item-center space-x-1',
                              badge.className,
                              badgeCategory?.className,
                              predefinedCategory?.className
                            )}
                          >
                            {BadgeIcon && (
                              <BadgeIcon
                                className={cn(
                                  'w-3 h-3',
                                  predefinedCategory?.iconClassName,
                                  badgeCategory?.iconClassName
                                )}
                              />
                            )}
                            <span>{badge.label}</span>
                          </Badge>
                        );
                      })}
                  </div>
                )}
                {/* <div className="flex items-center space-x-2">
                  <TbMail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div> */}
              </HoverCardContent>,
              document.body
            )
          : null
      }
    </HoverCardTrigger>
  );
};

export default UserHoverCard;
