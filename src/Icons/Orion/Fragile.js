import React from 'react';

export default function Fragile(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M24.002 62h15.996" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M30 2l1.998 4.128L30 11.998l4 4-4 12" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 62V42M22 2h20s6 17.333 6 26c0 8.836-7.162 14-16 14s-16-5.164-16-14c0-5.969 6-26 6-26z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
