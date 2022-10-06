import React from 'react';

export default function Brush(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M61.5 3.2a1.8 1.8 0 00-2.3-.2h-.1C37.9 18.8 27.9 28.1 20.6 35.4l8.6 8.7c7.3-7.3 16.6-17.3 32.4-38.5h.1a1.8 1.8 0 00-.2-2.4z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M18 38a6.1 6.1 0 008.7 8.7l2.6-2.6-8.6-8.7z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M18.3 55.5A6 6 0 009.8 47C5.5 51.2 7 59.9 2 61.4c4.7-.3 11.5-1.1 16.3-5.9z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
