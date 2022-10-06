import React from 'react';

export default function LowSignal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M2 41h12v14H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M60 55h-8m-3 0h-8m-3 0h-8m-3 0h-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
