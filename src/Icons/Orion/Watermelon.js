import React from 'react';

export default function Watermelon(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M56 15h6v4a30 30 0 11-60 0v-4h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M8 15v4a24 24 0 1048 0v-4zm24 16v4M20 23h-4m31.7 0h-4M24 29l-2.8 2.8M40 29l2.8 2.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
