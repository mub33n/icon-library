import React from 'react';

export default function SquareBulletedList(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 14h40M22 32h40M22 50h40" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 10h8v8H2zm0 18h8v8H2zm0 18h8v8H2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
