import React from 'react';

export default function Notebook(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 2v60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M54 62H11a3 3 0 01-3-3V5a3 3 0 013-3h43z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 14h16v8H28z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
