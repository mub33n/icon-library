import React from 'react';

export default function Spacecraft(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer1" cx={32} cy={22} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M22 26h-3.1a2.9 2.9 0 00-2.9 2.9v12.2a2.9 2.9 0 01-2.4 2.9h-2.7A2.9 2.9 0 008 46.9V58h8m26-32h3.1a2.9 2.9 0 012.9 2.9v12.2a2.9 2.9 0 002.4 2.9H53a2.9 2.9 0 013 2.9V58h-8m-20 0h8m6-6V19.8C42 8.9 32 2 32 2S22 8.9 22 19.8V52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M28 62v-4a6 6 0 10-12 0v4zm20 0v-4a6 6 0 10-12 0v4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
