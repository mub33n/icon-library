import React from 'react';

export default function AddFolder(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30.5 50H2V10h52v22.1M6 10V2h44v8" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={46} cy={46} r={16} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 38v16m-8-8h16" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
