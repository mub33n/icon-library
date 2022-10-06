import React from 'react';

export default function Speed(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 32h6M32 8v5.999M50 32h6M45 20l4-4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M15.183 16.544A.975.975 0 0115 16a1 1 0 011.489-.873l18.748 11.821a5.999 5.999 0 11-8.153 8.486z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
