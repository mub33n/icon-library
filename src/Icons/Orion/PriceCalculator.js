import React from 'react';

export default function PriceCalculator(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={8} y={2} width={48} height={60} rx={4} ry={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M56 14H8m24 0v48M8 38h48" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 26h12m12 0h12M40 48h8m-8 6h8M20 32V20m-4 26l8 8m-8 0l8-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
