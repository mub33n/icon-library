import React from 'react';

export default function Currency(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse data-name="layer1" cx={42} cy={33} rx={12} ry={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M54 41c0 2.2-5.4 4-12 4s-12-1.8-12-4m24 8c0 2.2-5.4 4-12 4s-12-1.8-12-4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30 39H2V3h60v36h-8" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={32} cy={21} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 21h4m32 0h4M12 3A10 10 0 012 13m60 0A10 10 0 0152 3M2 29a10 10 0 0110 10" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M30 33v24c0 2.2 5.4 4 12 4s12-1.8 12-4V33" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
