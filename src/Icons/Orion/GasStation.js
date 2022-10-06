import React from 'react';

export default function GasStation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23 34h-2a6 6 0 00-6 6v14a6 6 0 01-6 6 6 6 0 01-6-6V20l8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M3 20l8 8v4H3" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M41 34h8v14h-8z" />
      <path data-name="layer1" d="M23 62V6a4 4 0 014-4h26a4 4 0 014 4v56m-38 0h42M23 26h34M21 62" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
