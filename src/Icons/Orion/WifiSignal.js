import React from 'react';

export default function WifiSignal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={8} cy={56} r={6} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M8 2a54 54 0 0154 54M8 18a38 38 0 0138 38M8 34a22 22 0 0122 22" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
