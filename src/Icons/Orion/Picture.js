import React from 'react';

export default function Picture(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer1" cx={32} cy={24} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 34.6V50" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 50h60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M48 21.3a6.3 6.3 0 00-10-5 6.2 6.2 0 00.4-2 6.3 6.3 0 10-12.2 2.1 6.3 6.3 0 10-3.8 11.2 6.3 6.3 0 109.6 6.8 6.3 6.3 0 109.7-6.8 6.3 6.3 0 006.3-6.3z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
