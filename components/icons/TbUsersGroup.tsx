import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "users-group"
 */
const TbUsersGroup: FC<IIconProps> = props => {
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
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
      <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
      <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
    </svg>
  );
};

export default TbUsersGroup;
