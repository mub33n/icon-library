import React from 'react';

export default function Identity(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M34 46.9c4-.9 4-2.3 4-3.3v-1.5a9.3 9.3 0 01-2.9-6.9v-4.5a7 7 0 0113.9 0v4.5a9.3 9.3 0 01-3 6.9v1.5c0 .9 0 2.4 4.1 3.3S54 52 54 52H30a5.1 5.1 0 014-5.1z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 10H2v50h60V10h-8M26 24H10m10 8H10m14 8H10m8-30h28" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 4h8v12h-8zm36 0h8v12h-8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
