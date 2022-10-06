import React from 'react';

export default function TextSearch(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 8h42M2 56h42M2 24.02h22M2 40h22" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={43} cy={32} r={11} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M51 40l11 11" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
