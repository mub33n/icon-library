import React from 'react';

export default function HospitalSymbol(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={2} y={2} width={60} height={60} rx={4} ry={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M38 13v13H26V13H14v38h12V38h12v13h12V13H38z" strokeLinejoin="round" />
    </svg>
  );
}
