import React from 'react';

export default function Cd(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M25.7 24.3L12.2 9.5M22 32H2m36.4 7.7l13.5 14.8M42 32h20" />
      <circle data-name="layer1" cx={32} cy={32} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={32} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
