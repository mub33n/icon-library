import React from 'react';

export default function BoatWheel(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={32} r={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 10l16.3 16.4m11.3 11.3L54 54m-44 0l16.4-16.3m11.3-11.3L54 10M2 32h22m16 0h22M32 62V40m0-16V2" />
    </svg>
  );
}
