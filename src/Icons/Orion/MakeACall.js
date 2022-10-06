import React from 'react';

export default function MakeACall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 32h35M47.8 20L61 32 47.8 44" />
      <path data-name="layer1" d="M34 40v18a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h24a4 4 0 014 4v18M2 10h32M2 48h32m-16 7" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={18} cy={55} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
