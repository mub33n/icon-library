import React from 'react';

export default function Trophy(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 36v20m-10 0h20m-24 6h28" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M50 2v16a18 18 0 01-18 18 18 18 0 01-18-18V2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M49.5 14.5C62 14.5 62 2 62 2H2s0 12.5 12.5 12.5" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
