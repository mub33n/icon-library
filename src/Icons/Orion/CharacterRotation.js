import React from 'react';

export default function CharacterRotation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M55.8 35a26.3 26.3 0 00.2-3 26 26 0 10-7.6 18.4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 26l-6 10-8-8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M40 24v-4H20v4m10-4v26m4 0h-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
