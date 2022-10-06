import React from 'react';

export default function AudioBook(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M49 24a14.7 14.7 0 010 22.1m5.5-27a20.6 20.6 0 01.1 31.9M30 24l-9 8h-6a1 1 0 00-1 1v6a1 1 0 001 1h6l9 8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 11v40a5 5 0 005 5h35V16H7A5 5 0 017 6h31v10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
