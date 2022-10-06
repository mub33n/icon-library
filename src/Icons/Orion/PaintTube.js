import React from 'react';

export default function PaintTube(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M59.2 26a1.2 1.2 0 01-1.7 0L37.9 6.5a1.2 1.2 0 010-1.7l2.5-2.5a1.2 1.2 0 011.7 0l19.6 19.5a1.2 1.2 0 010 1.7z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M38.4 6.9L4 44.7c-.9.9 1.8 5.1 6 9.3s8.4 6.9 9.3 6L57 25.5" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M7.3 51.1L2 57.9l4.2 4.2 6.8-5.4m16.5-13.3a3.6 3.6 0 01-5 0l-4.1-4.1a3.6 3.6 0 010-5l12.1-12.2a3.6 3.6 0 015 0l4.1 4.1a3.6 3.6 0 010 5z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
