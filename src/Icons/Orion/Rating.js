import React from 'react';

export default function Rating(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 35.2l-9.9 7.1 3.8-11.5-9.9-6.7h12.2l3.8-12 3.8 12H48l-9.9 6.7 3.8 11.5-9.9-7.1z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M6 2.1h52v22a41.8 41.8 0 01-26 37.8A41.8 41.8 0 016 24.1z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
