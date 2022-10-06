import React from 'react';

export default function Eraser(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M14.9 57l3.5 3.5a5 5 0 007 0l35.1-35.1a5 5 0 000-7L57 14.9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M21.9 57L57 21.9a5 5 0 000-7L45.6 3.5a5 5 0 00-7 0L3.5 38.6a5 5 0 000 7L14.9 57a5 5 0 007 0zM21 21l22 22" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
