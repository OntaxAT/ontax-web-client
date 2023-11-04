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

const projects: Array<{
  title: string;
  manager: TUser;
  avatarUrl: FC<IIconProps>;
  progess: number;
}> = [
  {
    avatarUrl: Branding1,
    manager: users[0],
    title: 'Olympia',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding2,
    manager: users[1],
    title: 'Mirage',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding5,
    manager: users[2],
    title: 'Interstellar',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding4,
    manager: users[3],
    title: 'Aurora',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding3,
    manager: users[4],
    title: 'Spectrum',
    progess: Math.random() * 100
  },
  {
    avatarUrl: Branding1,
    manager: users[4],
    title: 'Zephyr',
    progess: Math.random() * 100
  }
];

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

/**
 * A card that gives a quick overview of current projects and their status.
 */
const ProjectsOverviewCard: FC = () => {
  const [data, setData] = useState<{ avg: number; items: typeof projects }>();

  useEffect(() => {
    setTimeout(() => {
      setData({ avg: Math.random() * 100, items: projects });
    }, 2000);
  }, []);

  return (
    <Card className="h-[440px] overflow-hidden">
      <CardHeader className="mb-1">
        <h3 className="font-semibold leading-none tracking-tight">Projects Status</h3>
        {data?.avg ? (
          <p className="text-sm text-muted-foreground">
            All projects got {(Math.random() * 100).toFixed(2)}% closer to completion
          </p>
        ) : (
          <Skeleton className="h-3.5 w-1/2" />
        )}
      </CardHeader>
      {(data?.items ?? Array.from({ length: 5 })).map((project, i) => {
        if (!project) {
          return <ProjectSkeleton key={i} />;
        }
        return (
          <CardContent key={i}>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <project.avatarUrl className="w-5 h-5" />
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
                <p className="font-semibold">+{project.progess.toFixed(2)}%</p>
              </div>
            </div>
          </CardContent>
        );
      })}
    </Card>
  );
};

export default ProjectsOverviewCard;
