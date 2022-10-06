import React from 'react';

export default function ImageGallery(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 54H2V2h52v8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 10h52v52H10z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={22} cy={22} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M16 50c0-2.8 2.6-16 9.3-16s6.1 6 8.7 6 2.6-16 10-16 12 23.8 12 26" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 50h52" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
