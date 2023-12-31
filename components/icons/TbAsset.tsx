import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "asset"
 */
const TbAsset: FC<IIconProps> = props => {
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
      <path d="M9 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
      <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M14.218 17.975l6.619 -12.174"></path>
      <path d="M6.079 9.756l12.217 -6.631"></path>
      <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    </svg>
  );
};

export default TbAsset;
