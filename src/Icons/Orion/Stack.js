import React from 'react';

export default function Stack(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18.3 39.6L4.2 47 32 61.7 59.8 47l-14.1-7.4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18.5 24.6L4.2 32.1 32 46.8l27.8-14.7-14.3-7.5" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 2.3L4.2 17 32 31.7 59.8 17 32 2.3z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
