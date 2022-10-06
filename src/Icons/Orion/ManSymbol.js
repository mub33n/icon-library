import React from 'react';

export default function ManSymbol(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={9} r={7} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M43 22H21a3 3 0 00-3 3v16a3 3 0 003 3h3v15a3 3 0 003 3h10a3 3 0 003-3V44h3a3 3 0 003-3V25a3 3 0 00-3-3z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
