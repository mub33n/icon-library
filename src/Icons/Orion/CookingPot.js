import React from 'react';

export default function CookingPot(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M28.5 19.1a4 4 0 116.8 0M2 27a4 4 0 014 4h4m52-4a4 4 0 00-4 4h-4" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M54 27v12a12 12 0 01-12 12H22a12 12 0 01-12-12V27zm-44 0c6.5-4.8 13.4-8 22-8s15.5 3.2 22 8" data-name="layer1" />
    </svg>
  );
}
