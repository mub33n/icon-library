import React from 'react';

export default function Link(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M36 34v1a8 8 0 008 8h10a8 8 0 008-8v-6a8 8 0 00-8-8H44a8 8 0 00-8 8v1m4 0v-1a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H44a4 4 0 01-4-4v-1m-12-4v-1a8 8 0 00-8-8H10a8 8 0 00-8 8v6a8 8 0 008 8h10a8 8 0 008-8v-1m-4 0v1a4 4 0 01-4 4H10a4 4 0 01-4-4v-6a4 4 0 014-4h10a4 4 0 014 4v1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M48.3 32a2 2 0 01-2 2h-29a2 2 0 01-2-2 2 2 0 012-2h29a2 2 0 012 2z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
