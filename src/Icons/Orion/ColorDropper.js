import React from 'react';

export default function ColorDropper(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32.5 14.7l16.8 16.8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M35.8 17.9L15 38.7a7.3 7.3 0 00-1.7 7.7l-3.9 3.9a1.5 1.5 0 000 2.1l2.3 2.3a1.5 1.5 0 002.1 0l3.9-3.9a7.3 7.3 0 007.6-1.8l20.8-20.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M46.1 28.2l6.8-6.8a7.3 7.3 0 00-10.3-10.3l-6.8 6.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
