import React from 'react';

export default function LineSpacing(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 2v60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 4h28m-28 8h34m-34 8h34M28 52h34m-34-8h28M28 60h34M28 28h34" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 10l8-8 8 8M2 54l8 8 8-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
