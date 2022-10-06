import React from 'react';

export default function BookmarkRibbon(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24 52a8 8 0 018 8V16a8 8 0 00-8-8H2v44zM54 8h8v44H40a8 8 0 00-8 8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M32 16a8 8 0 018-8h2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M54 26l-6-4-6 4V4h12v22z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
