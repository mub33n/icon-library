import React from 'react';

export default function Prescription(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M45.657 20L56.833 9.824a4 4 0 00-5.657-5.657L36.343 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <rect data-name="layer2" x={2} y={20} width={60} height={6} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M57 26v4a25.073 25.073 0 01-25 25A25.073 25.073 0 017 30v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M23.495 53.5a25.14 25.14 0 00-8.947 5.649.5.5 0 00.359.851h34.187a.5.5 0 00.359-.851 25.14 25.14 0 00-8.948-5.649" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={32} cy={39} r={9} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 34v10m-5-5h10" strokeLinejoin="round" />
    </svg>
  );
}
