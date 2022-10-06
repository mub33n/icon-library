import React from 'react';

export default function Idea(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M35.3 2c-14 0-24 5.2-24 16v10a20 20 0 01-4 8c-.9.9-1.2 2.5.9 3.1s2.5.4 2.7 1.7-.6 2.8.6 3.2.1 1.7 1.3 2.7-1 5.2 3.4 5.2h4.7c2.3 0 2.4 1.7 2.4 4s-2 6-2 6h28s-4-4.1-4-8c0-6 12-15.5 12-32S45.3 2 35.3 2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M34.7 16l-5.4 8h10l-5 7.4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M43.1 14.2a11 11 0 00-17.2-.1A8 8 0 0027.3 30h.7a10.9 10.9 0 0012.9 0h.4a8 8 0 001.8-15.8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
