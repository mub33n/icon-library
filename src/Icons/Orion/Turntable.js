import React from 'react';

export default function Turntable(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={26} cy={33} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={26} cy={33} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={26} cy={33} r={24} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={54} y={9} width={8} height={12} rx={2} ry={2} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M42.1 39.8L40 36.4a2 2 0 00-2.7-.7L27 41.9a2 2 0 00-.7 2.7l2 3.4a2 2 0 002.7.7l10.3-6.2a2 2 0 00.8-2.7zm-1-1.7l16.2-9.4c.9-.6.7-1.8.8-2.9V21" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
