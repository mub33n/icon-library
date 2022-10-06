import React from 'react';

export default function DollarBill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M54 32a8 8 0 018-8V14H2v10a8 8 0 110 16v10h60V40a8 8 0 01-8-8z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M36.93 27A5 5 0 0032 22.835c-2.762 0-5 1.821-5 4.584s2.5 4.012 5 4.581 5 1.823 5 4.583-2.238 4.584-5 4.584a5 5 0 01-5-5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 22.835v-2.501m0 23.335v-2.5" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
