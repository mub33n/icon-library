import React from 'react';

export default function Vespa(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 54v9" />
      <path data-name="layer1" d="M40 21H24a6 6 0 00-6 6v15a12 12 0 0012 12h4a12 12 0 0012-12V27a6 6 0 00-6-6zm-8 0v13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={32} cy={11} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M8 10h8c4 0 7.4-8 16-8s11.9 8 16 8h8m-40 0s12 7 12 11m20-11s-12 6.6-12 11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
