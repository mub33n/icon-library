import React from 'react';

export default function EuroBill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 30h16m-14 6h12m3-14h-2a11 11 0 000 22h2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M54 32a8 8 0 018-8V14H2v10a8 8 0 110 16v10h60V40a8 8 0 01-8-8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
