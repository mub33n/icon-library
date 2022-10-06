import React from 'react';

export default function Email(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M36 48v10a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h26a4 4 0 014 4v4M2 10h34M2 48h34" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 18h34v22H28z" />
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 18l17 14 17-14" />
      <circle data-name="layer1" cx={19} cy={55} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
