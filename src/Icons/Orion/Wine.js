import React from 'react';

export default function Wine(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M36 12V2h-8v10c0 4-6 10-6 16v31c0 1.656 1.672 3 7.639 3h4.721c6.276 0 7.64-1.344 7.64-3V28c0-6-6-12-6-16z" data-name="layer2" />
      <path d="M27.999 12h8" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
    </svg>
  );
}
