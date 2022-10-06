import React from 'react';

export default function CellularSignal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy="29.2" r={8} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M32 37.2v22" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M45.1 14.1a20 20 0 010 30.2m-26.2 0a20 20 0 010-30.2M52.2 7a30 30 0 010 44.4m-40.4 0a30 30 0 010-44.4" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
