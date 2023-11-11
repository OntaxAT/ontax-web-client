import { TNotification } from '@/app/types/features/notification';
import TbAlertHexagon from '@/components/icons/TbAlertHexagon';
import TbAlertTriangle from '@/components/icons/TbAlertTriangle';
import TbBell from '@/components/icons/TbBell';
import TbBellBolt from '@/components/icons/TbBellBolt';
import TbCalendarEvent from '@/components/icons/TbCalendarEvent';
import TbSpeakerphone from '@/components/icons/TbSpeakerphone';
import { IIconProps } from '@/components/icons/types/icons';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card';
import { notificationColors } from '@/lib/constants/notification';
import { cn } from '@/lib/utils/misc';
import { format } from 'date-fns';
import { FC } from 'react';
import UserHoverCard from '../user/UserHoverCard';
import { getTimeDifferenceInWords } from '@/lib/utils/time';

interface INotificationCardProps {
  data: TNotification;
}

/**
 * Card for displaying a notification
 */
const NotificationCard: FC<INotificationCardProps> = ({ data }) => {
  let bgColor: string, textColor: string, Icon: FC<IIconProps>;

  switch (data.details.category) {
    case 'critical': {
      bgColor = 'from-red-900/70';
      textColor = 'text-red-500';
      Icon = TbAlertHexagon;
      break;
    }
    case 'alert': {
      bgColor = 'from-orange-900/70';
      textColor = 'text-orange-500';
      Icon = TbAlertTriangle;
      break;
    }
    case 'announcement': {
      bgColor = 'from-blue-900/70';
      textColor = 'text-blue-500';
      Icon = TbSpeakerphone;
      break;
    }
    case 'event': {
      bgColor = 'from-emerald-900/70';
      textColor = 'text-emerald-500';
      Icon = TbCalendarEvent;
      break;
    }
    case 'reminder': {
      bgColor = 'from-yellow-900/70';
      textColor = 'text-yellow-500';
      Icon = TbBellBolt;
      break;
    }
    default: {
      bgColor = 'from-gray-900/70';
      textColor = 'text-gray-500';
      Icon = TbBell;
      break;
    }
  }

  return (
    <Card className="group relative overflow-hidden motion-safe:hover:scale-[1.01] transition-transform">
      <CardContent className="px-6 p-4">
        <div
          className={cn(
            'absolute top-0 left-0 bg-gradient-to-r w-[100px] group-hover:w-[150px] h-full transition-[width]',
            bgColor
          )}
        />
        <div className="relative flex gap-x-6 items-center">
          {data.details.sender ? (
            <HoverCard>
              <UserHoverCard
                user={data.details.sender}
                triggerContent={
                  <Avatar className="cursor-pointer hover:bg-gray-800 hover:scale-105 transition-transform">
                    <AvatarImage
                      src={data.details.sender.details.avatarUrl}
                      alt={data.details.sender.username}
                    />
                  </Avatar>
                }
              />
            </HoverCard>
          ) : (
            <Icon className={textColor} />
          )}
          <div className="flex-1">
            <div className={cn('font-semibold', textColor)}>{data.title}</div>
            <div className="text-sm text-muted-foreground">{data.description}</div>
          </div>
          <p className="text-muted-foreground text-sm">
            {getTimeDifferenceInWords(data.details.timestamp)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
