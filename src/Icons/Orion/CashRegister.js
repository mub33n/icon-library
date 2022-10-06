import React from 'react';

export default function CashRegister(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={36} y={2} width={16} height={8} rx={3} ry={3} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M44 10v8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 50l6-18h48l6 18M2 50h60v12H2zm26-32h24a4 4 0 014 4v10M8 32V22a4 4 0 014-4h4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M16 10h12v14H16zm20 16h12" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M15 44h4m6 0h4m6 0h4m6 0h4m-29-6h4m6 0h4m6 0h4" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={56} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
