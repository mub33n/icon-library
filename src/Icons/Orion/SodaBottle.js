import React from 'react';

export default function SodaBottle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M22 46s-2 3-2 4v8a3.7 3.7 0 004 4h16a3.7 3.7 0 004-4v-8c0-1-2-4-2-4m1.5-28c-1-4.2-3.6-8.3-7.5-10h-8c-3.9 1.7-6.5 5.8-7.5 10M42 30s2-2.6 2-8a17 17 0 00-.5-4h-23a17 17 0 00-.5 4c0 5.4 2 8 2 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 2h8v6h-8zm-6 28h20v16H22z" />
    </svg>
  );
}
