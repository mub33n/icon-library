import React from 'react';

export default function PointOfInterest(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M19 62l28-12m0 12L19 50" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M33 48.7c0-13.3 12.6-19.6 13.9-30.9A13.8 13.8 0 0047 16a14 14 0 10-28 0 14.5 14.5 0 00.1 1.7C20.3 29.1 33 35.3 33 48.7z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={4} cy={16} cx={33} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
