import React from 'react';

export default function Hidden(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M25.9 49.3a26.4 26.4 0 006.1.7c17.2 0 29.5-17.5 29.5-17.5a51.8 51.8 0 00-9.5-9.7m-6.5-4.3A29.1 29.1 0 0032 15C14.8 15 2.5 32.5 2.5 32.5a50.9 50.9 0 0015.4 13.6M32 44a12 12 0 0012-12m-3.5-8.5a12 12 0 00-17 17" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 2L2 62" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
