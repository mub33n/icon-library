import React from 'react';

export default function IpodPlayer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M26 10a8 8 0 018-8 8 8 0 018 8v39a7 7 0 007 7 7.1 7.1 0 007-7.5V18" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer2" x={2} y={10} width={32} height={52} rx={2} ry={2} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={18} cy={46} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 30h32" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M53 31h-3v6h3a3 3 0 000-6zm6-16h3v6h-3a3 3 0 010-6z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
