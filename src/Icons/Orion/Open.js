import React from 'react';

export default function Open(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M19 30V15A13 13 0 0132 2a13 13 0 0113 13v2a2 2 0 11-4 0v-2a9 9 0 00-18 0v15" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={10} y={30} width={44} height={32} rx={6} ry={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M34 49a2 2 0 01-2 2 2 2 0 01-2-2v-6a2 2 0 012-2 2 2 0 012 2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
