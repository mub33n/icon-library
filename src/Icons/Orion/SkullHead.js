import React from 'react';

export default function SkullHead(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={20} cy={36} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={44} cy={36} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M48 58a4 4 0 01-4 4H20a4 4 0 01-4-4v-6h-2a8 8 0 01-8-8V28A26 26 0 0132 2a26 26 0 0126 26v16a8 8 0 01-8 8h-2zM32 45.1V48m0 8v6m-8-6v6m16-6v6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
