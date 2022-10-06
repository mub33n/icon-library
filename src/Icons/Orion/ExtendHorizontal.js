import React from 'react';

export default function ExtendHorizontal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M39 26l3 3H22l4-4-4.477-3.992L10 32l11 10 4-4-3-3h20l-3 3 4 4 11-10-11-11-4 5z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 14h6v36H2zm54 0h6v36h-6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
