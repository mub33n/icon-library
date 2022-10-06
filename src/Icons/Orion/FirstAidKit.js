import React from 'react';

export default function FirstAidKit(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M43 33h-8v-8h-6v8h-8v6h8v8h6v-8h8v-6z" strokeLinejoin="round" />
      <rect data-name="layer1" x={2} y={15} width={60} height={42} rx={6} ry={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M23 15v-4a4 4 0 014-4h10a4 4 0 014 4v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
