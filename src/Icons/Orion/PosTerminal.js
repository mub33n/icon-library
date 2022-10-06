import React from 'react';

export default function PosTerminal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M40 18h19a3 3 0 013 3v30a3 3 0 01-3 3H40m14-36v36" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={2} y={2} width={38} height={60} rx={3} ry={3} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 10h22v16H10zm0 26h2m8 0h2m8 0h2m-22 8h2m8 0h2m8 0h2m-22 8h2m8 0h2m8 0h2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
