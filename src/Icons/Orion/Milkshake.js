import React from 'react';

export default function Milkshake(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42.9 22a8 8 0 10-14.2-7.3A5.9 5.9 0 0026 14a6 6 0 00-5.7 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 62h16m4-40a43.6 43.6 0 012 12 14 14 0 11-28 0 43.5 43.5 0 012-12zM32 48v14M42 2l-6 14" />
    </svg>
  );
}
