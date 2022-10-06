import React from 'react';

export default function Championship(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32 38v10c0 4-6 8-10 8h-3a3 3 0 00-3 3v3h32v-3a3 3 0 00-3-3h-3c-4 0-10-4-10-8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M48 22.1a16 16 0 01-32 0V2h32z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M16 7.9c-6-1.1-10 2.5-10 8S10.5 28 16 28h1.1M48 7.9c6-1.1 10 2.5 10 8S53.5 28 48 28h-1.1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
