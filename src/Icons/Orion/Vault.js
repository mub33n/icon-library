import React from 'react';

export default function Vault(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer1" x={2} y={2} width={60} height={60} rx={3} ry={3} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 16v-6h44v44H10v-6m0-8V24" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={34} cy={32} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M34 20v4m0 16v4M22 32h4m16 0h4m-20.5-8.5l2.8 2.8m11.4 11.4l2.8 2.8m-17 0l2.8-2.8m11.4-11.4l2.8-2.8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 16h4v8H8zm0 24h4v8H8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
