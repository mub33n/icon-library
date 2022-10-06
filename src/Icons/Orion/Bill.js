import React from 'react';

export default function Bill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 14h60v36H2z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={32} cy={32} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 32h4m32 0h4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M12 14A10 10 0 012 24m60 0a10 10 0 01-10-10M2 40a10 10 0 0110 10m40 0a10 10 0 0110-10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
