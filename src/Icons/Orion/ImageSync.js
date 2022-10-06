import React from 'react';

export default function ImageSync(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 46h30.4m3.8 12H2V2h48v37" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 50l-4.8 4.8-4.8-4.8M38 50l-4.8-4.8-4.8 4.8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M34 46a12.1 12.1 0 002.8 12.5 11.8 11.8 0 0014.1 2.1m5.5-6.6a12.1 12.1 0 00-2.8-12.5 11.8 11.8 0 00-14.1-2.1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
