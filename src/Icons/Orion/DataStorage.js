import React from 'react';

export default function DataStorage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 48v13.5M20 62h24m-28 0h-4m-4 0H4m48 0h-4m12 0h-4" />
      <ellipse data-name="layer1" cx={32} cy={10} rx={22} ry={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M54 20c0 4.4-9.8 8-22 8s-22-3.6-22-8m44 10c0 4.4-9.8 8-22 8s-22-3.6-22-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M10 10v30c0 4.4 9.8 8 22 8s22-3.6 22-8V10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
