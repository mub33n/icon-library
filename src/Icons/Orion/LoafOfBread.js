import React from 'react';

export default function LoafOfBread(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M34 59H10a6 6 0 01-6-6V25.3A4.8 4.8 0 012 21c0-8 8.1-16 18-16h24M3.7 25h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M62 21c0-8-8.1-16-18-16s-18 8-18 16a4.8 4.8 0 002 4.3V53a6 6 0 006 6h20a6 6 0 006-6V25.3a4.9 4.9 0 002-4.3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
