import React from 'react';

export default function Ticket(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M55 18.7A6.9 6.9 0 0145.3 9l-7-7L2 38.3l7 7a6.9 6.9 0 019.7 9.7l7 7L62 25.7z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M30.6 46a3 3 0 01-4.2 0L18 37.6a3 3 0 010-4.2L33.4 18a3 3 0 014.2 0l8.4 8.4a3 3 0 010 4.2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
