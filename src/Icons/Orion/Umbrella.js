import React from 'react';

export default function Umbrella(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 6V2m8 56a4 4 0 01-4 4 4 4 0 01-4-4V36" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 36a30 30 0 1160 0M2 36a9 9 0 0115 0m0 0a9 9 0 0115 0m0 0a9 9 0 0115 0m0 0a9 9 0 0115 0" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
