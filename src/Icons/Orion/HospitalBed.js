import React from 'react';

export default function HospitalBed(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M2 62V24m60 38V36m0 19H2m0-6h60M2 46a3.009 3.009 0 013-3h54a3.009 3.009 0 013 3M2 43v-2a5 5 0 015-5h3a7 7 0 017 7" strokeLinejoin="round" />
      <rect data-name="layer1" x={32} y={15} width={20} height={20} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M38 30V20m8 0v10m-8-5h8" strokeLinejoin="round" />
    </svg>
  );
}
