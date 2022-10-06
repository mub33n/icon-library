import React from 'react';

export default function DoNotIron(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 32h25.5M2 50a18 18 0 0118-18h2m18 18H2m16-32h36l8 32H50" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M2 2l60 60m0-60L2 62" strokeLinejoin="round" />
    </svg>
  );
}
