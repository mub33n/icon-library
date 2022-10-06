import React from 'react';

export default function ImageFolder(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M6 7a3 3 0 003 3h41v52H9a3 3 0 01-3-3V5a3 3 0 013-3h49v54h-8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M16 46c0-1.5 2.4-9 6-9s2.6 3 4 3 2-8 6-8 8 12.8 8 14" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 24h28v22H14z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
