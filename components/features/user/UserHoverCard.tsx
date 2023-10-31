import { TUser } from '@/app/types/features/user';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { getDisplayName } from '@/lib/utils/user';
import { FC, ReactNode } from 'react';

export interface IUserHoverCardProps {
  user: TUser;
  triggerContent: ReactNode;
}

/**
 * A hover card that displays some user information when hovering over the trigger.
 */
const UserHoverCard: FC<IUserHoverCardProps> = ({ user, triggerContent }) => {
  const displayName = getDisplayName(user);
  return (
    <HoverCardTrigger>
      {triggerContent}
      <HoverCardContent align="center" className="text-sm grid gap-y-4" sideOffset={10}>
        <Avatar>
          <AvatarImage
            src={user.details.avatarUrl}
            alt={displayName}
            className="h-15 w-15 bg-gray-200 dark:bg-gray-800 border"
          />
        </Avatar>
        <div className="grid gap-y-0">
          <p className="font-bold">{displayName}</p>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
      </HoverCardContent>
    </HoverCardTrigger>
  );
};

export default UserHoverCard;
