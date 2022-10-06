import React from 'react';

export default function CinemaReel(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32 62H6a4 4 0 01-4-4 4 4 0 014-4h48a8 8 0 008-8 8 8 0 00-8-8H41" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M15.4 27.5L9.2 30a15.9 15.9 0 010-12l6.2 2.5m4.9-5.1l-2.6-6.1A15.9 15.9 0 0129.6 9l-2.3 6.2m5.3 5.1l6.1-2.6a16 16 0 010 12.7l-6.1-2.6m-5.3 4.9l2.3 6.3a15.9 15.9 0 01-11.9-.3l2.6-6.1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={24} cy={24} r={22} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={24} cy={24} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
