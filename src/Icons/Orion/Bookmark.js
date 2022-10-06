import React from 'react';

export default function Bookmark(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M54 62L32 48 10 62V2h44v60z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 34.2l-8.7 6.2 3.4-10.1-8.7-6.2h10.7L32 14l3.3 10.1H46l-8.7 6.2 3.3 10.1-8.6-6.2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
