import React from 'react';

export default function IceCreamCone(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19.1 29.8L32 62l13.4-34" />
      <path data-name="layer1" d="M32 2a18 18 0 00-18 18v6a4 4 0 108 0v-2a4 4 0 118 0v6a4 4 0 108 0v-6a2 2 0 014 0 4 4 0 008 0v-4A18 18 0 0032 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
