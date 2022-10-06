import React from 'react';

export default function Tomato(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M20 12.3c-6.8.3-18 3.3-18 23.3s19 25 30 22c11 3.1 30-2 30-22S50.8 12.8 44 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M36 11.6c-.8-2.1-4-6-4-6s-3.3 3.9-4 6c-5.3-.8-12 2-12 2s4.7 3.6 8 4a40.2 40.2 0 00-6 8s9.6-.2 14-4a28.4 28.4 0 0012 4s-2.7-6.5-4-8c6.8-2 8-4 8-4s-8.4-2.7-12-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
