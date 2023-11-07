'use client';

import { TTeam, TTeamBadgeCategory } from '@/app/types/features/team';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils/misc';
import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import UserHoverCard from '../user/UserHoverCard';
import { getDisplayName, getUserUrl } from '@/lib/utils/user';
import Link from '@/components/ui/link';
import { getTeamUrl } from '@/lib/utils/team';
import { TProject, TProjectBadgeCategory } from '@/app/types/features/project';
import { getProjectUrl } from '@/lib/utils/project';
import { defaultProjectBadges, projectBadgeCategories } from '@/lib/constants/project';

export interface IProjectHoverCardProps {
  project: TProject;
  triggerContent: ReactNode;
}

/**
 * A hover card that displays some information about a team when hovering over the trigger content.
 */
const ProjectHoverCard: FC<IProjectHoverCardProps> = ({ project, triggerContent }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Since we're using a portal, we cant render the content server-side.
    setIsMounted(true);
  }, []);

  const managerLink = (
    <Link variant="hoverUnderline" href={getUserUrl(project.manager)}>
      {getDisplayName(project.manager)}
    </Link>
  );

  return (
    <>
      <HoverCardTrigger asChild>{triggerContent}</HoverCardTrigger>
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
                      src={project.details?.avatarUrl ?? 'https://api.dicebear.com/7.x/shapes/svg'}
                      alt={project.title}
                    />
                    <AvatarFallback>{project.title.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-y-0">
                    <p className="font-bold">{project.title}</p>
                    <Link
                      variant="hoverUnderline"
                      href={getProjectUrl(project)}
                      className="text-sm text-muted-foreground"
                    >
                      @{project.username}
                    </Link>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <span className="text-muted-foreground">Project manager:</span>
                  <HoverCard>
                    <UserHoverCard user={project.manager} triggerContent={managerLink} />
                  </HoverCard>
                </div>
                {project.details?.badges && project.details.badges.length > 0 && (
                  <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
                    {[...defaultProjectBadges, ...project.details.badges]
                      .sort((b1, b2) => {
                        if (b1.category instanceof Object && b2.category instanceof Object) {
                          return b1.category.order - b2.category.order;
                        } else if (
                          typeof b1.category === 'string' &&
                          typeof b2.category === 'string'
                        ) {
                          const category1 = projectBadgeCategories.find(
                            c => c.type === b1.category
                          );
                          const category2 = projectBadgeCategories.find(
                            c => c.type === b2.category
                          );
                          return category1 && category2 ? category1.order - category2.order : 0;
                        }
                        return 0;
                      })
                      .map((badge, i) => {
                        let predefinedCategory: TProjectBadgeCategory | undefined;
                        let badgeCategory: TProjectBadgeCategory | undefined;
                        if (badge.category instanceof Object) {
                          badgeCategory = badge.category;
                          predefinedCategory = badge.category
                            ? projectBadgeCategories.find(c => c.type === badgeCategory!.type)
                            : undefined;
                        } else if (typeof badge.category === 'string') {
                          badgeCategory = projectBadgeCategories.find(
                            c => c.type === badge.category
                          );
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
    </>
  );
};

export default ProjectHoverCard;
