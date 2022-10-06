import React from 'react';

export default function Voicemail(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M14 44h36" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={14} cy={32} r={12} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={50} cy={32} r={12} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
