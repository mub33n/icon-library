import React from 'react';

export default function VinylRecord(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} transform="rotate(-45 31.977 32.055)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={8} transform="rotate(-45 31.977 32.055)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M53.4 31.1a20.3 20.3 0 01-22.1 22.3m15.6-22.2A15 15 0 0131.1 47m1.7-36.4a20.3 20.3 0 00-22.2 22.1M32.8 17A15 15 0 0017 32.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
