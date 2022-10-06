import React from 'react';

export default function BankCards(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M10.3 29l-2.2-6.1a2.4 2.4 0 011.4-3.1L50.1 5.1a2.4 2.4 0 013.1 1.4l8.7 24a2.4 2.4 0 01-1.4 3.1L50 37.4m-39.9-9.2L55 11.8m-8.3 9.8l4.5-1.6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={2} y={29} width={48} height={30} rx="2.4" ry="2.4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 43h14m12-6h6M10 51h2m8 0h2m8 0h2m8 0h2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
