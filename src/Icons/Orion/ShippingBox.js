import React from 'react';

export default function ShippingBox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 15.3L32 2 2 15.3v33.4L32 62l30-13.3V15.3z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 15.3l30 13.3 30-13.3M18.4 8l30 13.3M32 28.6V62" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M54 31.6l-12 5.3v11.3l12-5.3V31.6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
