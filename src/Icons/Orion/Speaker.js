import React from 'react';

export default function Speaker(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M56.4 49.4a29.9 29.9 0 000-34.7l4.1-4.1a5 5 0 00-7.1-7.1l-4 4.1a29.9 29.9 0 00-34.7 0l-4.2-4.1a5 5 0 10-7.1 7.1l4.1 4.1a29.9 29.9 0 000 34.7l-4 4.1a5 5 0 007.1 7.1l4.1-4.1a29.9 29.9 0 0034.7 0l4.1 4.1a5 5 0 007.1-7.1z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={22} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
