import React from 'react';

export default function Handbag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 28h36l12 32H2l12-32z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M22 36V14A10 10 0 0132 4a10 10 0 0110 10v22" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 46h28" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
