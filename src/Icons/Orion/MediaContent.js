import React from 'react';

export default function MediaContent(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M34 14h28M34 26h28M34 38h28M34 50h28" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M4 36h20v20H4zM4 8h20v20H4z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
