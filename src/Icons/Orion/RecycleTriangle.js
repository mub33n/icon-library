import React from 'react';

export default function RecycleTriangle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M35 54h25L49.4 33.6M16 31L4 54h19.9" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
      <path d="M45 25L32 4 21.6 21.4" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M43 62l-8-8 8-8" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
      <path d="M48 16l-3 9-10-2" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M6 34l10-3 3 10" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
