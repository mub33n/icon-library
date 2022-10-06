import React from 'react';

export default function RemovePlace(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={10} cy={24} cx={24} data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M45.3 30a26.4 26.4 0 00.5-3.1v-.4c.1-.7.1-1.4.1-2.1A22.2 22.2 0 0024 2 22.2 22.2 0 002 24.4c0 .7 0 1.5.1 2.2v.3C3.9 44.5 24 58 24 58a65.2 65.2 0 007.2-5.9" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={16} cy={46} cx={46} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M38 46h16" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
