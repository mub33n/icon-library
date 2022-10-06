import React from 'react';

export default function WavingFlag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M25 38.7l12.3 21.2" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M55 4c-14.7 8.4-34.5.5-46 7l16 27.7C48.4 25.2 55 4 55 4z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
