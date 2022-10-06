import React from 'react';

export default function UrgentMessage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M2 8v40h18v11l12-11h30V8H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M34 32a2 2 0 01-2 2 2.2 2.2 0 01-2-2l-1-15a2.8 2.8 0 013-3 2.7 2.7 0 013 3z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={40} r={2} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
