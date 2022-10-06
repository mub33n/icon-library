import React from 'react';

export default function DocumentStack(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46 39v3a3 3 0 01-3 3H21a3 3 0 01-3-3v-3H2v20h60V39z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 31h52M6 23h52M6 15h52M6 7h52" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
