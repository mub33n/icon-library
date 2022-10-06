import React from 'react';

export default function Tag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={48} cy={16} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
