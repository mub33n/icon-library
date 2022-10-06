import React from 'react';

export default function PaperBag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 22h48v40H8z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M22 26V12A10 10 0 0132 2a10 10 0 0110 10v14" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
