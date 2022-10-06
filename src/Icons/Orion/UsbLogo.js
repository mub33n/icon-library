import React from 'react';

export default function UsbLogo(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M25.5 8.5L32 2l6.5 6.5M20 28v5.5a4 4 0 002.3 3.7L32 42m12-18v5.5a4 4 0 01-2.3 3.7L32 38m0 12V2" />
      <circle data-name="layer1" cx={20} cy={24} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M40 16h8v8h-8z" />
      <circle data-name="layer1" cx={32} cy={56} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
