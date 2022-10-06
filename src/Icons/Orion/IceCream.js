import React from 'react';

export default function IceCream(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46.9 14.4A11.2 11.2 0 0047 13a11 11 0 00-19.8-6.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M34.4 13.5a11 11 0 10-16.6 12.6h.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M41 24H17.1l.8 2.1L32 62l12.2-28.1" />
      <path data-name="layer1" d="M41 24v6a4 4 0 003.2 3.9h.8a4 4 0 004-4V23h2a11 11 0 00-22 0v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
