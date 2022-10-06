import React from 'react';

export default function SunLounger(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M60 54H17.2L2 36m56 26l-6-8m-40 8l5.2-8" />
      <path data-name="layer2" d="M34 54s-4-8-8-8H10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 42V23.8M62 26c-6.4-4.2-16-4-20 0-4-4-16-4-20 0-4-4-13-4.7-20 0L32 6zM32 6V2" />
    </svg>
  );
}
