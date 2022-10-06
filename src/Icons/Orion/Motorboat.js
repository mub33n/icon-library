import React from 'react';

export default function Motorboat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M41.623 28.194L31 19.998s-13.097 1.398-22 12m1.999 5.043v-7.209" data-name="layer2" strokeLinejoin="round" />
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M3 46s6.335-18.002 45.726-18.002h13.273C62 28.043 59.73 46 43.005 46z" data-name="layer1" strokeLinejoin="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy="39.996" cx={21} data-name="layer1" strokeLinejoin="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy="37.996" cx="28.999" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
