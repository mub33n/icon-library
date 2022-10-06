import React from 'react';

export default function MarkerPen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M47.192 10.352l5.525-5.525 8.851 8.852-5.525 5.526" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M13.655 59.173h-9.59l-1.42-1.42-.213-.214 6.689-6.689a4.336 4.336 0 001.428-3.157v-3.268a1.335 1.335 0 01.387-1l.869-.868.828-.829.574-.574 12.032 12.039-1.4 1.4-.867.868a1.332 1.332 0 01-1 .387h-3.265a4.337 4.337 0 00-3.158 1.428z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M25.239 53.193l32.396-32.396L45.6 8.76 13.203 41.156m2.117 16.351l-6.428-6.428" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
