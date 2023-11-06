import { FC, useEffect, useState } from 'react';

import { TUser } from '@/app/types/features/user';
import UserHoverCard from '@/components/features/user/UserHoverCard';
import {
  Branding1,
  Branding2,
  Branding5,
  Branding4,
  Branding3
} from '@/components/icons/BrandingPlaceholders';
import { IIconProps } from '@/components/icons/types/icons';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { HoverCard } from '@/components/ui/hover-card';
import { users } from '@/lib/constants/user';
import { getDisplayName } from '@/lib/utils/user';
import { Skeleton } from '@/components/ui/skeleton';
import { TAsyncData } from '@/app/types/data/data';
import { TProject } from '@/app/types/features/project';
import { TOverviewProjectList } from '../../../types/overview';

const ProjectSkeleton: FC = () => {
  return (
    <CardContent>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="w-5 h-5" />
            <div className="flex flex-col ml-3">
              <Skeleton className="w-[50px] h-4 mb-2" />
              <Skeleton className="w-[100px] h-4" />
            </div>
          </div>
          <Skeleton className="w-1/6 h-4" />
        </div>
      </div>
    </CardContent>
  );
};

interface IProjectsOverviewCardProps {
  data: TAsyncData<TOverviewProjectList>;
}

/**
 * A card that gives a quick overview of current projects and their status.
 */
const ProjectsOverviewCard: FC<IProjectsOverviewCardProps> = ({ data }) => {
  const projectData = data.data;
  return (
    <Card className="h-[440px] overflow-hidden">
      <CardHeader className="mb-1">
        <h3 className="font-semibold leading-none tracking-tight">Projects Status</h3>
        {projectData?.avg ? (
          <p className="text-sm text-muted-foreground">
            All projects got {(Math.random() * 100).toFixed(2)}% closer to completion
          </p>
        ) : (
          <Skeleton className="h-3.5 w-1/2" />
        )}
      </CardHeader>
      {(projectData?.items ?? Array.from({ length: 5 })).map((project, i) => {
        if (!project || data.state === 'loading') {
          return <ProjectSkeleton key={i} />;
        }

        return (
          <CardContent key={i}>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {project.details?.avatarUrl ? (
                    <project.details.avatarUrl className="w-5 h-5" />
                  ) : (
                    <Branding1 className="w-5 h-5" />
                  )}
                  <div className="flex flex-col ml-3">
                    <p className="font-semibold">{project.title}</p>
                    <HoverCard>
                      <p className="text-sm text-muted-foreground">
                        Project Manager:&nbsp;
                        <UserHoverCard
                          user={project.manager}
                          triggerContent={
                            <span className="hover:underline underline-offset-4 cursor-pointer">
                              {getDisplayName(project.manager)}
                            </span>
                          }
                        />
                      </p>
                    </HoverCard>
                  </div>
                </div>
                {project.details?.progress && (
                  <p className="font-semibold">
                    +{project.details.progress.toFixed(2)}
                    <span className="text-xs text-muted-foreground"> %</span>
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        );
      })}
    </Card>
  );
};

export default ProjectsOverviewCard;
