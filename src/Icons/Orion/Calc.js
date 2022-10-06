import React from 'react';

export default function Calc(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 12v12m-6-6h12m-2 24l-8 8m0-8l8 8m18-32h12M42 42h8m-8 8h8" strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={4} y={4} width={56} height={56} rx={8} ry={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 4v56M4 32h56" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
