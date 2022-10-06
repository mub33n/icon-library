import React from 'react';

export default function HAssistance(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M2 10h34V6a4 4 0 00-4-4H6a4 4 0 00-4 4v52a4 4 0 004 4h26a4 4 0 004-4V46m0 2H2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M54 18l-6 14h14m-4-6v12m-14 0H32l8.5-10v-.2a6 6 0 00-8.5-8.2" />
      <circle data-name="layer1" cx={19} cy={55} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
