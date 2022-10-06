import React from 'react';

export default function NewSticker(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M32 2a30 30 0 1030 30" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 39V26l7.9 12h.1V25m14 1h-8v12h8m-2-6h-6m21.7-.4l2.1 6.4h.6l1.5-5.5m-14-7.3L39.4 38h.4l2.7-7.6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M62 32L32 2c-4 22 8 34 30 30z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
