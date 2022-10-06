import React from 'react';

export default function TrafficLight(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 2h32v60H16z" />
      <circle data-name="layer2" cx={32} cy={14} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={32} cy={32} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={32} cy={50} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 18h-6L6 8h10m0 28h-6L6 26h10m0 28h-6L6 44h10m32-26h6l4-10H48m0 28h6l4-10H48m0 28h6l4-10H48" />
    </svg>
  );
}
