import React from 'react';

export default function Resize(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M38.121 33.879L50 45.758V41a3 3 0 016 0v15H41a3 3 0 010-6h4.758l-11.88-11.879a3 3 0 014.243-4.242z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M23 8a3 3 0 010 6h-4.758l11.88 11.879a3 3 0 11-4.243 4.242L14 18.243V23a3 3 0 01-6 0V8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
