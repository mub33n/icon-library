import React from 'react';

export default function Money(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M2 49.5V16.2S6 12 18 12s15.2 6 28 6a63.4 63.4 0 0016-2.5v34S57.6 52 48 52s-17.2-6-28-6a44.8 44.8 0 00-18 3.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M41.9 31.6c1 5.5-2.7 10-8.1 10s-10.6-4.5-11.6-10 2.7-10 8.1-10S41 26 41.9 31.6z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M11.9 12.4A10 10 0 012 24m0 14a10 10 0 019.9 8.7M62 26a10 10 0 01-9.9-8.4m.1 34.2A10.1 10.1 0 0152 50a10 10 0 0110-10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
