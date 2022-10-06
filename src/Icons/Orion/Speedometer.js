import React from 'react';

export default function Speedometer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={30} cy={32} cx={32} data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M10 32a22 22 0 1144 0" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M24 20l4.188 17.142a3.987 3.987 0 106.93-3.624C35.124 33.396 24 20 24 20" data-name="layer1" />
    </svg>
  );
}
