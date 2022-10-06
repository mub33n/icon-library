import React from 'react';

export default function EmptyTrash(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 13h60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M9.2 23l3.3 24c.4 2 1.8 4 4 4h30.9c2.2 0 3.7-2.1 4-4l3.5-24" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M5 13l.8 7.1A3.4 3.4 0 009.2 23h45.7a3.4 3.4 0 003.4-2.9L59 13" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
