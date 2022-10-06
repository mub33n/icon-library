import React from 'react';

export default function WeighingScale(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={2} y="1.994" width={60} height={60} rx={5} ry={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M42 25.994H22l-9-15a41.176 41.176 0 0118.561-4c6.983 0 13.661.962 19.439 4zm-10 0l4-13m-4-5.998v3.998" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M28.9 48.774l-2-11.909a7 7 0 10-13.8 2.351l2 11.909a7 7 0 1013.8-2.351zM45.27 31.1a6.982 6.982 0 00-8.066 5.7l-2.096 11.9a7.064 7.064 0 005.622 8.18 6.982 6.982 0 008.066-5.7l2.095-11.9a7.064 7.064 0 00-5.621-8.18z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
