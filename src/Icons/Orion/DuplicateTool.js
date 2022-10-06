import React from 'react';

export default function DuplicateTool(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24.8 21.9l-4.5-9.4 39.2 18.2-14.9 6.1-5.9 14.7-7.4-15.8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M4.5 12.5l39.2 18.2-14.9 6-5.9 14.8-18.4-39z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
