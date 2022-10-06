import React from 'react';

export default function Helicopter(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M57 36c0-5.7-8.1-14-18-14s-10 6.8-10 10 1.2 10 8.5 10h13.4a6.1 6.1 0 006.1-6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M39 16v14c0 4.2 2 6 5.8 6H57m-27.6-8H9a5.3 5.3 0 01-4.1-2L1 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 16h48M27 48h28" />
    </svg>
  );
}
