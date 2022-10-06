import React from 'react';

export default function Windstorm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M56 28a4 4 0 014 4 4 4 0 01-4 4h-8m10 16a4 4 0 004-4 4 4 0 00-4-4H44" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M56 20.1a12.9 12.9 0 00-7-2h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 44h21a6 6 0 016 6 6 6 0 01-6 6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M24 36h14a6 6 0 006-6 6 6 0 00-6-6M20 36h-2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
