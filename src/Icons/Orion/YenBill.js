import React from 'react';

export default function YenBill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24.8 20L32 30.4V44m7.2-24L32 30.4M27 32h10m-10 6h10" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M54 32a8 8 0 018-8V14H2v10a8 8 0 110 16v10h60V40a8 8 0 01-8-8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
