import React from 'react';

export default function PillBottle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M18 16.006v-11a3 3 0 013-3h22a3 3 0 013 3v11m-22-9v9m8-9v9m8-9v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <rect data-name="layer1" x={13} y="16.006" width={38} height={46} rx={6} ry={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M41 36.006h-6v-6h-6v6h-6v6h6v6h6v-6h6v-6z" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M13 24.089h38M13 54.006h38" strokeLinejoin="round" />
    </svg>
  );
}
