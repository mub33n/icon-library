import React from 'react';

export default function Watch(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M15.802 18.635L21 2h22l5.198 16.634M15.823 45.391L21 61.958h22l5.177-16.567M52.619 28H56a1 1 0 011 1v6a1 1 0 01-1 1h-3.381" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M24 27l8.037 7.073L43 23" strokeLinejoin="round" />
      <circle data-name="layer1" cx={32} cy={32} r={21} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
