import React from 'react';

export default function Plug(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M36 46v8h-8v-8m4 8.1V62" />
      <path data-name="layer1" d="M46 18v18a10 10 0 01-10 10h-8a10 10 0 01-10-10V18m-4 0h36m-26 0V2m16 16V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
