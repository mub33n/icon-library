import React from 'react';

export default function Equalizer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M59 8H12m18 24H7m52 0H36m12 24H7m52 0h-4.999" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30 26h6v12h-6zM6 2h6v12H6zm42 48h6v12h-6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
