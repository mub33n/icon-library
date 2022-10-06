import React from 'react';

export default function LikeHand(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M18 54h2c4 0 12 4 16 4h16a4 4 0 000-8h2a4 4 0 000-8h2a4 4 0 000-8m0 0h2a4 4 0 100-8H38a81.1 81.1 0 002-18 4 4 0 00-8 0s-1.8 19.9-14 21.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 60l16-2V26H2v34z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={10} cy={50} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
