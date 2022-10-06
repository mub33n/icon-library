import React from 'react';

export default function GeoFence(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M33.9 46c14.6.3 26.1 3.7 26.1 8s-12.5 8-28 8-28-3.6-28-8 11.5-7.7 26.1-8" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 54c0-15.2 14.5-21.1 15.9-34A16 16 0 1016 18a16.7 16.7 0 00.1 2C17.5 32.9 32 38.8 32 54z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={4} cy={18} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
