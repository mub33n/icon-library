import React from 'react';

export default function TakeAPhoto(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M48.2 22h-7.5l-3.9-4h-9.6l-3.9 4h-7.5a1.8 1.8 0 00-1.8 1.8v18.4a1.8 1.8 0 001.8 1.8h32.4a1.8 1.8 0 001.8-1.8V23.8a1.8 1.8 0 00-1.8-1.8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
