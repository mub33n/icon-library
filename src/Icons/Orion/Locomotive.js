import React from 'react';

export default function Locomotive(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M54 16H42M11 46H2V32h6V12m19 34h-8m24 0h-8m-5-34v16h25.9s2.1 2 2.1 8.2a21.4 21.4 0 01-2 9.8h-5M34 12H2m50 4v12m-8-12v12" />
      <circle data-name="layer2" cx={15} cy={49} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={31} cy={49} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={47} cy={49} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M56 46l6 6M30 28H8" />
    </svg>
  );
}
