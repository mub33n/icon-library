import React from 'react';

export default function CreditCard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M62 16a3 3 0 00-3-3H5a3 3 0 00-3 3v7h60zM2 23v25a3 3 0 003 3h54a3 3 0 003-3V23" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 31h20m18 0h6m-44 8h8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
