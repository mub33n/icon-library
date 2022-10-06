import React from 'react';

export default function CoffeeMug(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46 13.6h.9C53.2 13.6 62 18.9 62 29s-8.6 16-15.1 16H46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M46 41h.9C51.5 41 58 36.7 58 29s-7.2-11.4-11.1-11.4H46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M46 7v40a10 10 0 01-10 10H12A10 10 0 012 47V7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
