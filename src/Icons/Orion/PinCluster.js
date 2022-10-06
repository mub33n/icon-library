import React from 'react';

export default function PinCluster(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M36 45.4A89.6 89.6 0 0044 56s16-17.6 16-32A16 16 0 0039 8.8" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M24 2A20 20 0 004 22c0 18 20 39 20 39s20-21 20-39A20 20 0 0024 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={8} cy={22} cx={24} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
