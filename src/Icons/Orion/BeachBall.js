import React from 'react';

export default function BeachBall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23.6 3.2c32.4-1 30.7 52 5.4 58.7M4.6 44.3C13.9 13.4 54 8.7 61.4 25.9M51.9 9.5c-2.7-.3-6.5 2.8-7.3 6.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
