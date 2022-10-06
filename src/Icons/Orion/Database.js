import React from 'react';

export default function Database(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse data-name="layer1" cx={32} cy={11} rx={26} ry={9} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M6 11v42c0 5 11.6 9 26 9s26-4 26-9V11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M58 25c0 5-11.6 9-26 9S6 30 6 25m52 14c0 5-11.6 9-26 9S6 44 6 39" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
