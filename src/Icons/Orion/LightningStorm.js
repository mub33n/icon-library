import React from 'react';

export default function LightningStorm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 40h7a13 13 0 100-25.9h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 40h11.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M13.4 46.1l-4.8 6h6l-4.8 6m37-12l-4.8 6h6l-4.8 6M36.7 27L22 43h7.5l-3.3 14L42 40h-7.4l2.1-13z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
