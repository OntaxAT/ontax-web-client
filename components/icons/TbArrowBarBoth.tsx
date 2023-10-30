import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "arrow-bar-both"
 */
const TbArrowBarBoth: FC<IIconProps> = props => {
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
      <path d="M8 12h-6"></path>
      <path d="M5 15l-3 -3l3 -3"></path>
      <path d="M22 12h-6"></path>
      <path d="M19 15l3 -3l-3 -3"></path>
      <path d="M12 4v16"></path>
    </svg>
  );
};

export default TbArrowBarBoth;
