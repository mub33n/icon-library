import React from 'react';

export default function EditButton(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M44.889 26.138l1.882-1.883c1.941-1.94 1.439-4.584-.5-6.524s-4.584-2.442-6.525-.5l-1.882 1.883" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M41.814 29.212l3.075-3.074-7.027-7.027-3.074 3.074M18.164 38.809l7.026 7.026" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={30} cy={32} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M25.19 45.835l16.624-16.623-7.026-7.027-16.624 16.624L16 47.999l9.19-2.164z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
