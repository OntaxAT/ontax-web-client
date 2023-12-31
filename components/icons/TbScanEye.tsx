import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "scan-eye"
 */
const TbScanEye: FC<IIconProps> = props => {
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
      <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
      <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 12c3.333 -4.667 6.667 -4.667 10 0"></path>
      <path d="M7 12c3.333 4.667 6.667 4.667 10 0"></path>
      <path d="M12 12h-.01"></path>
    </svg>
  );
};

export default TbScanEye;
