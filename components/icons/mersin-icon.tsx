import React from 'react';
import {Svg} from '../styles/svg';

export const MersinIcon = () => {
   return (
      <Svg
         width="42"
         height="42"
         viewBox="0 0 150.44 75.22"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            '& rect': {
               fill: '$background',
               stroke: '$border',
            },
            '& path': {
               fill: '$accents7',
            },
         }}
      >
         <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2,75.22h0c2.26,0,4.46-.67,6.35-1.93h0l54.56-36.42-12.11-8.08L0,70.42l7.04,3.57c1.6,.81,3.38,1.23,5.16,1.23Z"
            fill="#969696"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.26,2l-22.97,15.68,12.15,8.29,9.83-6.56c1.14-.76,2.45-1.16,3.8-1.16h0c2.65,0,5.02,1.49,6.21,3.88h0l12.92,26.19,25.95,17.71L117.04,6.47c-1.97-3.99-5.93-6.47-10.34-6.47-2.3,0-4.52,.69-6.44,2Z"
            fill="#969696"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.4,6.47L2.29,66.03l25.95-17.71,12.93-26.19c1.18-2.39,3.56-3.88,6.21-3.88h0c1.35,0,2.66,.4,3.8,1.16h0l80.71,53.88c1.89,1.26,4.09,1.93,6.35,1.93,1.78,0,3.57-.43,5.16-1.23h0l7.04-3.57L50.18,2c-1.91-1.31-4.14-2-6.44-2-4.41,0-8.37,2.48-10.34,6.47Z"
            fill="#969696"
         />
      </Svg>
   );
};
