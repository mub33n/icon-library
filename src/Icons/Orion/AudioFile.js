import React from 'react';

export default function AudioFile(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 6H2v52h8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M30 38h-4a4 4 0 104 4V20l16-4v22a4 4 0 11-4-4h4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 6h52v52H10z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
