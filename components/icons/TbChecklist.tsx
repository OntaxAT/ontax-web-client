import { FC } from 'react';
import { IIconProps } from './types/icons';

/**
 * Tabler icon for "checklist"
 */
const TbChecklist: FC<IIconProps> = props => {
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
      <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
      <path d="M14 19l2 2l4 -4"></path>
      <path d="M9 8h4"></path>
      <path d="M9 12h2"></path>
    </svg>
  );
};

export default TbChecklist;
