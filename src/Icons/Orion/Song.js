import React from 'react';

export default function Song(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 10V2h52v8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M26 42h-4a4 4 0 104 4V24l16-4v22a4 4 0 11-4-4h4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 10h60v52H2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
