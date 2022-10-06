import React from 'react';

export default function Strategy(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M29.5 57A27.5 27.5 0 1157 29.5m-27.5 16a16 16 0 1116-16" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx="29.5" cy="29.5" r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 62L37.9 37.9m17.3 1.6l-17.3-1.6 1.4 17.4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
