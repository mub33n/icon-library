import React from 'react';

export default function IceCreamBowl(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M20.568 20.338a12.006 12.006 0 0122.793-.219m-23.416.422L12 2" data-name="layer1" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M31.947 30a8.81 8.81 0 00.055-.996 9 9 0 10-17.953.922m20.201.076a8 8 0 1115.496 0" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy="7.975" cx={32} data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M54 30a22 22 0 11-44 0zM32 52v10m-5.998 0H38" data-name="layer1" />
    </svg>
  );
}
