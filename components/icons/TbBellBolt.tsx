import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "bell-bolt"
 */
const TbBellBolt: FC<IIconProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M13.5 17h-9.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1"></path>
      <path d="M9 17v1a3 3 0 0 0 4.368 2.67"></path>
      <path d="M19 16l-2 3h4l-2 3"></path>
    </svg>
  );
};

export default TbBellBolt;
