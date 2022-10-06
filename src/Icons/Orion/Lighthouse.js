import React from 'react';

export default function Lighthouse(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 8V2" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M22 28v34m20-34v34m-28 0h36M18 28h28m-20 0V16m12 12V16m-14 0h16m-14 0v-2a6 6 0 1112 0v2" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 16L4 10m12 12L4 28m44-6l12 6M48 16l12-6" />
    </svg>
  );
}
