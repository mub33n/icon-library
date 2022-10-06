import React from 'react';

export default function WindTurbine(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M19 62h24M31 32v30" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={31} cy={28} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M35.2 6.7c0-3.5-2.2-4.7-4-4.7-1.8 0-4 1.2-4 4.7s2 13.3 4 13.3 4-9.8 4-13.3zM25.1 32.4c-1-1.7-10.5 1.4-13.5 3.2s-3 4.2-2.1 5.8c.9 1.6 3 2.9 6.1 1.1s10.5-8.3 9.5-10.1zm25.7 3.3c-3-1.8-12.5-4.9-13.5-3.2-1 1.7 6.5 8.4 9.5 10.1s5.1.5 6.1-1.1c.9-1.6 1-4.1-2.1-5.8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
