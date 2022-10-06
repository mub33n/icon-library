import React from 'react';

export default function DslrCamera(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 32v-6h8v6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M57 32h-4.4L48 26H32l-4.6 6H7a3 3 0 00-3 3v24a3 3 0 003 3h50a3 3 0 003-3V35a3 3 0 00-3-3z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={16} cy={44} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={40} cy={45} r={11} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={40} cy={45} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M26 2h28v16H26zm4 16l2 8m18-8l-2 8M34 10h12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
