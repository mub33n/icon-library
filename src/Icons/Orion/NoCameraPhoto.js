import React from 'react';

export default function NoCameraPhoto(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M39 33a7 7 0 01-7 7m-5.4-2.6a7 7 0 019.8-9.9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M30 44h18.2a1.8 1.8 0 001.8-1.8V23.8M42 22h-1.3l-3.9-4h-9.6l-3.9 4h-7.5a1.8 1.8 0 00-1.8 1.8v18.4a1.8 1.8 0 001.8 1.8H20" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M53.2 10.8L10.8 53.2m42.4-42.4L10.8 53.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
