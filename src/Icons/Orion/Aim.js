import React from 'react';

export default function Aim(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 2v16m0 28v16M18 32H2m60 0H46" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={22} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
