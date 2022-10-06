import React from 'react';

export default function SprayPaint(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30 33.1h14v20H30M39 12V6h5v6M11 9h15m.9 3l-15 4m0-14l15 4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30 23.4h23v38.59H30zm23 0a11.4 11.4 0 00-4.9-9.4v-2H34.9v2.1a11.4 11.4 0 00-4.9 9.3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
