import React from 'react';

export default function CoffeePot(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M55.1 32l-3.2-14 6-16h-48l6 16s-1.6 6.5-3.4 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M55.8 18H9.9a5.7 5.7 0 00-6 6v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M55.1 32H12.4c-1.8 7.5-3.8 16-4.6 20-1.8 9.3 3.5 10 8 10h36c10.7 0 8-10 8-10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
