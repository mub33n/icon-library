import React from 'react';

export default function Ribbon(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M34 30.5L26 53l-10-4 7.3-19.5m8.9 6.4L38 53l10-4-8-20" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M25.4 18.3S17.7 11 4 11C-.5 23.2 4 35 4 35s14.9-2.5 22-7m12.6-9.7S46.3 11 60 11c4.5 12.2 0 24 0 24s-14.9-2.5-22-7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy="22.8" r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
