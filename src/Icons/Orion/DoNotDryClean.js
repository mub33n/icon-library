import React from 'react';

export default function DoNotDryClean(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M15 15a24 24 0 1134 34m-7 4.8A24 24 0 0110.2 22" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M2 2l60 60m0-60L2 62" strokeLinejoin="round" />
    </svg>
  );
}
