import { FC } from 'react';
import { IIconProps } from './types/icons';

const ChevronUpDown: FC<IIconProps> = props => {
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
      <g transform="matrix(1,0,0,1,-1082.1,-460.126)">
        <g transform="matrix(108.191,0,0,108.191,432.952,-80.8278)">
          <rect x="0" y="0" width="24" height="24" />
        </g>
        <g transform="matrix(108.191,0,0,108.191,432.952,-80.8278)">
          <path d="M7,11L12,6L17,11" />
        </g>
        <g transform="matrix(-108.191,-1.32495e-14,1.32495e-14,-108.191,3029.53,3424.27)">
          <path d="M7,17L12,12L17,17" />
        </g>
      </g>
    </svg>
  );
};

export default ChevronUpDown;
