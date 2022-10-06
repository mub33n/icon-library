import React from 'react';

export default function SatchelBag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M62 57a5 5 0 01-5 5H7a5 5 0 01-5-5V36a10 10 0 0110-10h40a10 10 0 0110 10z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M20 30V14A12 12 0 0132 2a12 12 0 0112 12v16" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 38h60" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
