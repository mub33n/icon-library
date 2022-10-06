import React from 'react';

export default function Binocular(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M28 42V16.5A7.5 7.5 0 0020.5 9a7.7 7.7 0 00-6.7 4.1l-.3.6L3 37m33 5V16.5A7.5 7.5 0 0143.5 9a7.7 7.7 0 016.7 4.1l.3.6L61 37M28 17.8a10 10 0 017.9 0m-7.9 12a10 10 0 017.9 0" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={15} cy={42} r={13} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M22 42a7 7 0 01-7 7m41-7a7 7 0 01-7 7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={49} cy={42} r={13} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
