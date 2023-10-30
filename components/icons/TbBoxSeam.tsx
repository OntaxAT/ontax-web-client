import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "box-seam"
 */
const TbBoxSeam: FC<IIconProps> = props => {
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
      <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
      <path d="M12 12l8 -4.5"></path>
      <path d="M8.2 9.8l7.6 -4.6"></path>
      <path d="M12 12v9"></path>
      <path d="M12 12l-8 -4.5"></path>
    </svg>
  );
};

export default TbBoxSeam;
