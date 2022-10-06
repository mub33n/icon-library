import React from 'react';

export default function LondonBus(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M18 56v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4m42 0v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4M16 10h30v8H16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 24h26v18H8" />
      <path data-name="layer1" d="M42 42V24h12V8a6 6 0 00-6-6H14a6 6 0 00-6 6v48h46V42zm10-18v18M8 48h8m30 0h8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
