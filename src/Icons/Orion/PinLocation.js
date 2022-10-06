import React from 'react';

export default function PinLocation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 2a16 16 0 00-16 16.1c0 14.5 16 29 16 29s16-14.6 16-29A16 16 0 0032 2z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={6} cy={18} cx={32} data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M16 62l32-14m0 14L16 48" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
