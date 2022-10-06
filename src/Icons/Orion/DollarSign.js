import React from 'react';

export default function DollarSign(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M39.889 24A8 8 0 0032 17.334c-4.418 0-8 2.914-8 7.333s4 6.42 8 7.334c4 .9 8 2.917 8 7.334s-3.582 7.333-8 7.333a8 8 0 01-8-8" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 17.334v-5.335m0 40.003v-5.335" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={30} cy={32} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
