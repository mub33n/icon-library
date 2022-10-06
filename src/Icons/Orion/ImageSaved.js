import React from 'react';

export default function ImageSaved(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 46h28m5.4 12H2V2h48v28.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={46} cy={46} r={16} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M53 42l-8 9-5-5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
