import React from 'react';

export default function Markers(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M42.9 43.3A61 61 0 0048 49s14-13.4 14-26a14 14 0 00-23.3-10.5m-13.5 0A14 14 0 002 23c0 12.6 14 26 14 26a61 61 0 004.9-5.5" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M31.9 11a16 16 0 00-16 16c0 14.4 16 32 16 32s16-17.6 16-32a16 16 0 00-16-16z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={6} cy={27} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
