import { TTeam } from '@/app/types/features/team';
import { TUser } from '@/app/types/features/user';
import TeamHoverCard from '@/components/features/team/TeamHoverCard';
import UserHoverCard from '@/components/features/user/UserHoverCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { teams } from '@/lib/utils/constants/team';
import { users } from '@/lib/utils/constants/user';
import { getDisplayName } from '@/lib/utils/user';
import { HoverCard } from '@radix-ui/react-hover-card';
import { FC, useEffect, useState } from 'react';

type TPerformanceItem = {
  entity: TUser | TTeam;
  score: number;
  comparison: number;
};

const PerformanceItemSkeleton: FC = () => {
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
 * A card that shows the best and worst performing employees/teams in the company based on their performance score
 */
const PerformanceOverviewCard: FC = () => {
  const [data, setData] = useState<{ avg: number; items: TPerformanceItem[] }>();

  useEffect(() => {
    setTimeout(() => {
      setData({
        avg: Math.random() * 100,
        items: [
          {
            entity: users[0],
            score: Math.random() * 100,
            comparison: Math.random() * 100
          },
          {
            entity: teams[0],
            score: Math.random() * 100,
            comparison: Math.random() * 100
          },
          {
            entity: teams[1],
            score: Math.random() * 100,
            comparison: Math.random() * 100
          },
          {
            entity: teams[2],
            score: Math.random() * 100,
            comparison: Math.random() * 100
          },
          {
            entity: users[3],
            score: Math.random() * 100,
            comparison: Math.random() * 100
          }
        ]
      });
    }, 2000);
  }, []);

  return (
    <Card className="h-full">
      <CardHeader className="mb-1">
        <h3 className="text-sm font-medium">Top Performers</h3>
        {data?.avg ? (
          <p className="text-sm text-muted-foreground">
            The average performance score is{' '}
            <span className="font-semibold">
              {data?.avg.toFixed(2)}
              <span className="text-muted-foreground text-xs">PS</span>.
            </span>
          </p>
        ) : (
          <Skeleton className="h-3.5 w-1/2" />
        )}
      </CardHeader>
      {(data?.items ?? Array.from({ length: 5 }))
        .sort((a, b) => {
          return b.score - a.score;
        })
        .map((performer, i) => {
          if (!performer) {
            return <PerformanceItemSkeleton key={i} />;
          }

          let displayData: { name: string; avatar?: string; progess: number };
          const isUser = !('members' in performer.entity);
          if ('members' in performer.entity) {
            displayData = {
              avatar: performer.entity.details?.avatarUrl,
              name: performer.entity.name,
              progess: performer.score
            };
          } else {
            displayData = {
              avatar: (performer.entity as TUser).details.avatarUrl,
              name: getDisplayName(performer.entity as TUser),
              progess: performer.score
            };
          }

          return (
            <CardContent key={i}>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="hover:scale-105 transition-transform bg-gray-200 dark:bg-gray-800">
                      <AvatarImage src={displayData.avatar} />
                      <AvatarFallback>{displayData!.name}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ml-3 font-semibold">
                      {isUser ? (
                        <HoverCard>
                          <p>
                            <UserHoverCard
                              user={performer.entity as TUser}
                              triggerContent={
                                <span className="hover:underline underline-offset-4 cursor-pointer">
                                  {getDisplayName(performer.entity as TUser)}
                                </span>
                              }
                            />
                          </p>
                        </HoverCard>
                      ) : (
                        <HoverCard>
                          <p>
                            <TeamHoverCard
                              team={performer.entity as TTeam}
                              triggerContent={
                                <span className="hover:underline underline-offset-4 cursor-pointer">
                                  {displayData.name}
                                </span>
                              }
                            />
                          </p>
                        </HoverCard>
                      )}
                    </div>
                  </div>
                  <p className="font-semibold">
                    {performer.score.toFixed(2)}
                    <span className="text-muted-foreground text-sm ml-1">PS</span>
                  </p>
                </div>
              </div>
            </CardContent>
          );
        })}
    </Card>
  );
};

export default PerformanceOverviewCard;
