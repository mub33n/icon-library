import React from 'react';

export default function SplitVertical(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M24 52l8 9 8-9M24 12l8-9 8 9m-8 16V3m0 58V36" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M10 28h44m-44 8h44" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
