import React from 'react';

export default function ZoomIn(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx="24.2" cy="24.2" r="22.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M39.9 39.9L62 62" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24.2 14.5v19.3m9.6-9.6H14.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
