import React from 'react';

export default function ShiftKey(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={2} y={2} width={60} height={60} rx="7.8" ry="7.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 22v22m-8-14l8-8 8 8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
