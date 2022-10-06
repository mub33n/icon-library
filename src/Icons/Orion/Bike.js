import React from 'react';

export default function Bike(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={10} cy="37.998" cx={12} data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={10} cy="37.998" cx={52} data-name="layer2" />
      <path d="M45.014 22L32.246 38H12.18l5.92-16" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
      <path d="M32.246 38L18.1 22h26.914m-30.836-6.002h8" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
      <path d="M36.178 14h8l8 23.998" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
    </svg>
  );
}
