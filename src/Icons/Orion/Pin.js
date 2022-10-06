import React from 'react';

export default function Pin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24.8 35.2L2.6 61.4l26.2-22.2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M38.8 49.2l4.3-4.2V33.7L53.7 23a5 5 0 006.3-.6l1.4-1.4L43.1 2.6 41.6 4a5 5 0 00-.6 6.3L30.3 20.9H19l-4.2 4.2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
