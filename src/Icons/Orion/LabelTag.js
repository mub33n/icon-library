import React from 'react';

export default function LabelTag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={48} cy={15} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M31.3 21.4l11.3 11.3m-22.6 0l8.5 8.5M25.6 27l5.7 5.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
