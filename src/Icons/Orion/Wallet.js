import React from 'react';

export default function Wallet(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M51.7 15L48 5 20.5 15" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M58 43v13a3 3 0 01-3 3H5a3 3 0 01-3-3V18a3 3 0 013-3h50a3 3 0 013 3v13" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={42} y={31} width={20} height={12} rx={2} ry={2} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 21h2m8 0h2m8 0h2m8 0h2M16 53h2m8 0h2m8 0h2m8 0h2" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={49} cy={37} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
