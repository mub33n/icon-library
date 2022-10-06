import React from 'react';

export default function SportMedal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8.7 2l11 36.7M24.3 2l8.1 30M55.3 2L44.4 38.3M39.7 2l-7.8 28.2" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="32.2" cy={47} r={15} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="32.2" cy={47} r={7} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
