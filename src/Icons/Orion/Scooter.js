import React from 'react';

export default function Scooter(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M22 44a8 8 0 11-16 0m52.7-2a8 8 0 11-15.5 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M38 10h4c1.1 0 4 1.2 4 4v18.2c0 3.2-2.9 10.5-12.1 10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M46 32h6c9.7 0 10 10 10 10H38.5M16 30A14 14 0 002 44h32a14 14 0 00-14-14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M23.9 22H2c1 6.1 6.9 8 13.9 8h4a21.2 21.2 0 009.1-1.7c3.1-1.7 3.4-6.3-5.1-6.3zM51 15v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
