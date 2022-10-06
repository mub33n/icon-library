import React from 'react';

export default function Wind(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M2 17c4 4.1 16 11.9 30 1.9S58 17 62 21M10 35c5.7 2.3 13.5 3.2 22-2.9C46 22 58 30 62 34" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 44c4 4.1 16 12.2 30 2.2 8.5-6.2 16.3-5.5 22-3.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
