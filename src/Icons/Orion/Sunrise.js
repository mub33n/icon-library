import React from 'react';

export default function Sunrise(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M20.7 42.1a12 12 0 1122.6 0M32 10v8m28 20h-8m-40 0H4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 48H2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12.8 18.8l5.6 5.6m32.8-5.6l-5.6 5.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
