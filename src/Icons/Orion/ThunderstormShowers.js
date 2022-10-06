import React from 'react';

export default function ThunderstormShowers(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 39h7a13 13 0 100-26h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 39h11.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M36.7 26L22 42h7.5l-3.3 14L42 39h-7.4l2.1-13zM16 47.1l-6.4 8m38.4-8L41.6 55" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
