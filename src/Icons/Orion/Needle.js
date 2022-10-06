import React from 'react';

export default function Needle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M47.714 42l2.857 2.857a2.026 2.026 0 010 2.857l-2.857 2.857a2.026 2.026 0 01-2.857 0L42 47.714M62 62L49.143 49.143M18.429 18.429L5.571 5.571M2 9.143L9.143 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M25.571 17l22.143 22.143a2.026 2.026 0 010 2.857L42 47.714a2.026 2.026 0 01-2.857 0L17 25.571" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx="14.143" cy="28.429" r="4.041" transform="rotate(-45 14.143 28.429)" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx="28.429" cy="14.143" r="4.041" transform="rotate(-45 28.428 14.143)" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M11.286 25.571l14.285-14.285m-2.142 12.143l4.285-4.286m1.429 7.143L32 23.429M32 32l4.298-4.335m4.273 12.906l4.286-4.285m-7.143-1.429L40.571 32" strokeLinejoin="round" />
    </svg>
  );
}
