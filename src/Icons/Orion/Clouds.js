import React from 'react';

export default function Clouds(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M54.2 36.7A10 10 0 0052 17a13 13 0 00-25 4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M56 43a12 12 0 00-12-12h-1.2a16 16 0 00-30.7 4H12a10 10 0 100 20h32.1A12 12 0 0056 43z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
