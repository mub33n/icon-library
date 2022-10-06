import React from 'react';

export default function Health(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M47 27h-9a1 1 0 01-1-1v-9a1 1 0 00-1-1h-8a1 1 0 00-1 1v9a1 1 0 01-1 1h-9a1 1 0 00-1 1v8a1 1 0 001 1h9a1 1 0 011 1v9a1 1 0 001 1h8a1 1 0 001-1v-9a1 1 0 011-1h9a1 1 0 001-1v-8a1 1 0 00-1-1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
