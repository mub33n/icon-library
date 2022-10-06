import React from 'react';

export default function StockPot(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23.1 10A9 9 0 0141 10M11 24H3a2 2 0 01-2-2 2 2 0 012-2h8m42 4h8a2 2 0 002-2 2 2 0 00-2-2h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M53 10v46a6 6 0 01-6 6H17a6 6 0 01-6-6V10m-4 0h50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
