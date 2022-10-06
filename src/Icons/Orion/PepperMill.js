import React from 'react';

export default function PepperMill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 8V2m-4 0h8" />
      <path data-name="layer1" d="M44 62V38a2 2 0 00-2-2H22a2 2 0 00-2 2v24zm0-46v6a2 2 0 01-2 2H22a2 2 0 01-2-2v-6m4 20V24m16 12V24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer1" x={18} y={8} width={28} height={8} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
