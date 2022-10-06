import React from 'react';

export default function Prize(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M40 41l8-39H16l8 39m8-39v26.2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 53.9L20.9 62l4.3-13L14 41h13.8L32 28l4.2 13H50l-11.2 8 4.3 13L32 53.9z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
