import React from 'react';

export default function Book(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 10h32" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M54 2H18a8 8 0 000 16h36v44H18a8 8 0 01-8-8V10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
