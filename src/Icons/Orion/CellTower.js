import React from 'react';

export default function CellTower(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer1" cx={32} cy={24} r={8} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M45.1 8.9a20 20 0 010 30.2m-26.2 0a20 20 0 010-30.2m33.3-7.1a30 30 0 010 44.4m-40.4 0a30 30 0 010-44.4" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M29.2 31.5L18 62h28L34.8 31.5M23.6 48h17.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
