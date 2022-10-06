import React from 'react';

export default function Thunderstorm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M24.763 42H13a10.966 10.966 0 113.209-21.453A16.98 16.98 0 0148.504 16.1c.166-.007.328-.026.496-.026A12.963 12.963 0 1149 42h-7" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M36.738 29L22 45h7.467l-3.256 14L42 42.001h-7.368L36.738 29z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
