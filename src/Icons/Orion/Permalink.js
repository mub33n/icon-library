import React from 'react';

export default function Permalink(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32 14.4l8.8-8.8a12.4 12.4 0 0117.6 0 12.4 12.4 0 010 17.6L44.3 37.3a12.4 12.4 0 01-17.6 0 12.6 12.6 0 01-1.6-1.9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M32 49.6l-8.8 8.8a12.4 12.4 0 01-17.6 0 12.4 12.4 0 010-17.6l14.1-14.1a12.4 12.4 0 0117.6 0 12.5 12.5 0 011.6 1.9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
