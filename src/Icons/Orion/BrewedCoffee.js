import React from 'react';

export default function BrewedCoffee(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M18 36h25.998v14c0 8-8.191 12-8.191 12H26s-8.002-4-8.002-12c0-12 .002-14 .002-14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M6 62h52M36 30c0-12 12-16 12-28M26.002 30c0-6.125 5.998-8.896 5.998-14" strokeLinejoin="round" />
      <path data-name="layer1" d="M43.998 37.998h2a6 6 0 010 12h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
