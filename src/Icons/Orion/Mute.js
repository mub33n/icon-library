import React from 'react';

export default function Mute(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M36 37.9l2 1c3.7 1.4 5.3-1 6.6-2.7a4.2 4.2 0 015.7-1.1l9 5.9c1.1.8 3 1.8 2.6 4.3S58 54 50.2 54c-5.5 0-12-3.1-18.2-7.9l-2-1.6-.6-.5m-4.9-4.5C16.1 31.1 10 21.5 10 13.8S16.9 2.3 18.7 2s3.5 1.5 4.3 2.7l5.9 9a4.2 4.2 0 01-1.1 5.7c-2 1.6-4.9 3.4-1.7 8.6a31.2 31.2 0 004.5 5.4" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M62 2L2 62" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
