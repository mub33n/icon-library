import React from 'react';

export default function CloudyFog(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M55.8 35A12 12 0 0044 25h-1.2a16 16 0 00-30.7 4H12a10 10 0 00-9.2 6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 41h56M6 49h48m-42 8h38" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M55.1 32.5A10 10 0 0052 13a13 13 0 00-24.7 2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
