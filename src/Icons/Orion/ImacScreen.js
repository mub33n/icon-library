import React from 'react';

export default function ImacScreen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M22 60h20M32 50v10m30-20V6a2 2 0 00-2-2H4a2 2 0 00-2 2v34" />
      <path data-name="layer1" d="M2 40v8a2 2 0 002 2h56a2 2 0 002-2v-8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
