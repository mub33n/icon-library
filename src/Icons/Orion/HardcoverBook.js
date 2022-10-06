import React from 'react';

export default function HardcoverBook(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 42h60M2 50h60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M22 2v54a6 6 0 01-6 6H8a6 6 0 01-6-6V2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M22 10a6 6 0 01-6 6H8a6 6 0 01-6-6m40-8v54a6 6 0 01-6 6h-8a6 6 0 01-6-6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M42 10a6 6 0 01-6 6h-8a6 6 0 01-6-6m40-8v54a6 6 0 01-6 6h-8a6 6 0 01-6-6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M62 10a6 6 0 01-6 6h-8a6 6 0 01-6-6M22 2c0 3.3-2.7 4-6 4H8c-3.3 0-6-.7-6-4m40 0c0 3.3-2.7 4-6 4h-8c-3.3 0-6-.7-6-4m40 0c0 3.3-2.7 4-6 4h-8c-3.3 0-6-.7-6-4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
