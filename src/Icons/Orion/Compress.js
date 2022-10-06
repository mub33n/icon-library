import React from 'react';

export default function Compress(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 32h22.999m14 0H62" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M48 40l-9.001-8L48 24M16 40l8.999-8L16 24" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
