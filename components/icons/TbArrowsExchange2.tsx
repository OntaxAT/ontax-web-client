import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "arrows-exchange-2"
 */
const TbArrowsExchange2: FC<IIconProps> = props => {
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
      <path d="M17 10h-14l4 -4"></path>
      <path d="M7 14h14l-4 4"></path>
    </svg>
  );
};

export default TbArrowsExchange2;
