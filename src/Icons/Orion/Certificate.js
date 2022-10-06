import React from 'react';

export default function Certificate(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M50 46V10a8 8 0 00-8-8H9.2c4.4 0 6.8 3.6 6.8 8v44a8 8 0 008 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M54 46H24a8 8 0 010 16h30a8 8 0 000-16zM9.2 2C4.8 2 2 5.6 2 10h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 14h14M26 24h14M26 34h14" />
    </svg>
  );
}
