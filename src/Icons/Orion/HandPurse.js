import React from 'react';

export default function HandPurse(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M14 22v-2a18 18 0 0136 0v2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M54 22H10S4 44 4 50a12 12 0 0012 12h32a12 12 0 0012-12c0-6-6-28-6-28z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M16 32h32v6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
