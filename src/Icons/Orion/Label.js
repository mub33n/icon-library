import React from 'react';

export default function Label(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24.5 62L2 39.5 31.6 9.9l21.1 1.4 1.4 21.1L24.5 62z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="42.8" cy="21.2" r={2} transform="rotate(-45 42.86 21.147)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M45.7 5.7c4.2-4.3 10.5-4.9 14-1.4s2.9 9.8-1.4 14.1-10.6 4.9-14.1 1.4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
