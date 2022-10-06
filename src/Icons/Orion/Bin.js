import React from 'react';

export default function Bin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 10h52m-36 0V5.9A3.9 3.9 0 0125.9 2h12.2A3.9 3.9 0 0142 5.9V10m10.5 0l-2.9 47.1a5 5 0 01-4.9 4.9H19.3a5 5 0 01-4.9-4.9L11.5 10" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 18v36M22 18l2 36m18-36l-2 36" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
