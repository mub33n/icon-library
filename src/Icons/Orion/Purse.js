import React from 'react';

export default function Purse(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M36 4a4 4 0 00-4 4v4h4a4 4 0 000-8zm-8 0a4 4 0 014 4v4h-4a4 4 0 010-8zM3 18a4 4 0 014-4h50a4 4 0 014 4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M56 22H8c0 8-6 12-6 26a12 12 0 0012 12h36a12 12 0 0012-12c0-14-6-14-6-26z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
