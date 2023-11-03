'use client';

import { TTeam, TTeamBadgeCategory } from '@/app/types/features/team';
import { TUserBadgeCategory } from '@/app/types/features/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { defaultTeamBadges, teamBadgeCategories } from '@/lib/utils/constants/team';
import { userBadgeCategories } from '@/lib/utils/constants/user';
import { cn } from '@/lib/utils/misc';
import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ITeamHoverCardProps {
  team: TTeam;
  triggerContent: ReactNode;
}

/**
 * A hover card that displays some information about a team when hovering over the trigger content.
 */
const TeamHoverCard: FC<ITeamHoverCardProps> = ({ team, triggerContent }) => {
  const [isMounted, setIsMounted] = useState(false);

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
                      src={team.details?.avatarUrl ?? 'https://api.dicebear.com/7.x/shapes/svg'}
                      alt={team.name}
                      className=" bg-gray-200 dark:bg-gray-800 border"
                    />
                    <AvatarFallback>{team.name}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-y-0">
                    <p className="font-bold">{team.name}</p>
                    <p className="text-sm text-muted-foreground">@{team.username}</p>
                  </div>
                </div>
                {team.details?.badges && team.details.badges.length > 0 && (
                  <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
                    {[...defaultTeamBadges, ...team.details.badges]
                      .sort((b1, b2) => {
                        if (b1.category instanceof Object && b2.category instanceof Object) {
                          return b1.category.order - b2.category.order;
                        } else if (
                          typeof b1.category === 'string' &&
                          typeof b2.category === 'string'
                        ) {
                          const category1 = teamBadgeCategories.find(c => c.type === b1.category);
                          const category2 = teamBadgeCategories.find(c => c.type === b2.category);
                          return category1 && category2 ? category1.order - category2.order : 0;
                        }
                        return 0;
                      })
                      .map((badge, i) => {
                        let predefinedCategory: TTeamBadgeCategory | undefined;
                        let badgeCategory: TTeamBadgeCategory | undefined;
                        if (badge.category instanceof Object) {
                          badgeCategory = badge.category;
                          predefinedCategory = badge.category
                            ? teamBadgeCategories.find(c => c.type === badgeCategory!.type)
                            : undefined;
                        } else if (typeof badge.category === 'string') {
                          badgeCategory = teamBadgeCategories.find(c => c.type === badge.category);
                        }

                        const BadgeIcon = predefinedCategory?.icon || badgeCategory?.icon;

                        return (
                          <Badge
                            key={i}
                            className={cn(
                              'flex item-center space-x-1 text-primary-foreground/75',
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
              </HoverCardContent>,
              document.body
            )
          : null
      }
    </HoverCardTrigger>
  );
};

export default TeamHoverCard;
