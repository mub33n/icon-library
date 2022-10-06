import React from 'react';

export default function StreetView(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={6} cy={8} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M38 46.2c12.6.8 22 4 22 7.8s-12.5 8-28 8-28-3.6-28-8 9.4-7 22-7.8" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M42 18H22a2 2 0 00-2 2v12a2 2 0 002 2h4v15a3 3 0 003 3h6a3 3 0 003-3V34h4a2 2 0 002-2V20a2 2 0 00-2-2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
