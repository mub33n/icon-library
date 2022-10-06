import React from 'react';

export default function ProtectShield(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32 2c-6 6-16.2 9.8-26 0v22.1A42 42 0 0032 62a42 42 0 0026-37.9V2C48 12 37.7 7.7 32 2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 18v24M20 30h24" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
