import React from 'react';

export default function PenTool(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 19.3L44.8 2l-8 10.3 14.9 15 10.3-8z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="28.7" cy="35.3" r="3.5" transform="rotate(-45 28.637 35.338)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M38.3 13.8c-5.2 5.2-10 8-24.2 8C11.6 32.2 5.7 52.3 2 62c9.7-3.7 29.7-9.6 40.2-12.1 0-14.2 2.7-19 8-24.2m-24 12.1L2 62" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
