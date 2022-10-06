import React from 'react';

export default function DoNotBleach(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M38 48H6.9L18 28.5m3.8-6.7L32 4l24.9 44h-8.8" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M2 2l46.1 46.1L62 62m0-60L2 62" strokeLinejoin="round" />
    </svg>
  );
}
