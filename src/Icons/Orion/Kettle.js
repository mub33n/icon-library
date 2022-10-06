import React from 'react';

export default function Kettle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M43 34.5a20 20 0 10-34 .1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={26} cy={20} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M26 24c12 0 24 16.8 24 28 0 6-3.4 8-8 8H10c-5.1 0-8-2-8-8 0-10.9 12-28 24-28zm16.5 10H9.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M45.2 37.6L56 32l6 4-13 10" />
    </svg>
  );
}
