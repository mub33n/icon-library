import React from 'react';

export default function PaintBucket(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 62V18m40 0v44M9 18h46M9 62h46" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M12 27h27a2 2 0 012 2v22a2 2 0 01-2 2H12" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M17.5 18v-5a11 11 0 0111-11h7a11 11 0 0111 11v9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="46.5" cy={24} r={2} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
