import React from 'react';

export default function CameraShutter(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M25 20h34m-20 0l17.2 29.7M46 32.1L28.4 61.8M38.9 44H4.5M25 44L7.8 14.3M18 31.9L35.4 2.2" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
