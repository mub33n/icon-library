import React from 'react';

export default function BritishPoundBill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M54 32a8 8 0 018-8V14H2v10a8 8 0 110 16v10h60V40a8 8 0 01-8-8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 42h14m-14-8h14m0-7a5 5 0 00-10 0v11c0 2-.7 4-4 4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
