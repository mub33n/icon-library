import React from 'react';

export default function SkewTool(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M27 25.5H2.8v34h1.9m32.1 0v-34" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M38.9 59.5H4.7l22.3-34h34.2l-22.3 34z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14.8 11.5h36m-7-7l7 7-7 7.1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
