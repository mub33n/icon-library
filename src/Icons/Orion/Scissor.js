import React from 'react';

export default function Scissor(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M26.859 17.572C41.6 32.311 44.315 52.193 22 62l13.665-32.208" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M46.428 37.153C31.689 22.415 11.807 21.684 2 44l32.519-15.189" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" transform="rotate(-45.002 33.015 11)" r={9} cy={11} cx="33.015" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" transform="rotate(-45.001 53 30.998)" r={9} cy="30.998" cx={53} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
