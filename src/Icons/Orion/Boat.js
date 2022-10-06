import React from 'react';

export default function Boat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M9 46.001l-5.998-14H28L22 22h24.002L52 30l8.777 2.982c1.21.411 1.357 2.057.098 3.32l-8.11 8.14" data-name="layer2" />
      <path d="M31.879 22l5.039 8H52" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 43.999c-4 0-4 2.001-8 2.001s-4-2.001-8-2.001m32 0c-4 0-4 2.001-8 2.001s-4-2.001-8-2.001m32 0c-4 0-4 2.001-8 2.001s-4-2.001-8-2.001m28.002 1A7.758 7.758 0 0158 46c-4 0-4-2.001-8-2.001" data-name="layer1" />
    </svg>
  );
}
