import React from 'react';

export default function RfidSignal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy="32.2" r={4} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M24.6 41.6a12 12 0 010-18.8m14.8 0a12 12 0 010 18.9M18.2 48a21 21 0 010-31.6m27.6 0a21 21 0 010 31.7m-34 6.3a30 30 0 010-44.4m40.4 0a30 30 0 010 44.4" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
