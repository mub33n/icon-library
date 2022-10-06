import React from 'react';

export default function PinDestination(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M16 62l32-14m0 14L16 48" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M48 18a16 16 0 10-20.4 15.4l4.4 13 4.4-13.1A16 16 0 0048 18z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={6} cy={18} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
