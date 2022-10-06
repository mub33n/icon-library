import React from 'react';

export default function QrCode(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32.5 38v22h8m6 0h14V48m0-2v-4m0-10v8m-4.8-6.7h-3.1m1.9 8.7h-10m-4 4h-7.9m19.9 8v5.9M2.5 2h22v22h-22z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2.5 40h22v22h-22zm38-38h22v22h-22z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12.5 12h2v2h-2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12.5 50h2v2h-2zm38-38h2v2h-2zm-49 20h8m3 0h14m6-6v-4m0-2v-4m0-4V4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M34.5 36h4m0-4h4m-2 20h4m2-4h4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
