import React from 'react';

export default function Plane(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 17v6M15.5 35a4 4 0 11-6.9 0m46.9 0a4 4 0 11-6.9 0" />
      <ellipse data-name="layer1" cx={32} cy={33} rx={8} ry={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M30 31h4m4.5-4H48m-32 0h9.6M2 35h22.2m15.6 0H62" />
    </svg>
  );
}
