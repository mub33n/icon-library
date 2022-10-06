import React from 'react';

export default function Champagne(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 62h16m1.1-44C40.6 10 40 2 40 2H24s-.6 8-1.1 16M32 44v18" />
      <path data-name="layer1" d="M22.9 18c-.5 7.1-.9 14.2-.9 15.8a10 10 0 1020 0c0-1.5-.4-8.7-.9-15.8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
