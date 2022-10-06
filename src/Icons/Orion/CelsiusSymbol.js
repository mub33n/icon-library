import React from 'react';

export default function CelsiusSymbol(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={10} cy={8} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M37 62a22.1 22.1 0 01-22-22V30a22 22 0 0134.7-18l-3.5 4.9A16 16 0 0021 30v10a16 16 0 0025.3 13.1l3.4 4.9A21.9 21.9 0 0137 62z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
