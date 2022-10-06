import React from 'react';

export default function MapLocation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M38 46.2c12.6.8 22 4 22 7.8s-12.5 8-28 8-28-3.6-28-8 9.4-7 22-7.8" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 2a18.1 18.1 0 00-18.1 18.1C13.9 36.4 32 52.4 32 52.4s18.1-16 18.1-32.3A18.1 18.1 0 0032 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" cy={20} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" r={6} />
    </svg>
  );
}
