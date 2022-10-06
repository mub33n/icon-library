import React from 'react';

export default function SunnySideUpEgg(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={28} cy={37} r={11} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M31 2C20.9 2 3 10.4 3 38c0 15.8 10 24 24 24 6.6 0 18-3.3 26-14s11.7-19.8 4-28S46.2 2 31 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
