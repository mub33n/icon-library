import React from 'react';

export default function Chopper(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse data-name="layer2" cx={33} cy={29} rx={16} ry={17} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M16.3 52.2a30.1 30.1 0 017.5-9.3m25.9 9.3a30.1 30.1 0 00-7.5-9.3m5.6-20.3A16 16 0 0133 32a16 16 0 01-14.8-9.4M33 12V4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={15} cy={56} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={51} cy={56} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 8h60" />
    </svg>
  );
}
