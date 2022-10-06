import React from 'react';

export default function DestinationMap(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M43.1 17l9.9 9.9M43 27l9.9-9.9m-19.5 7.6a10 10 0 016.8-2.7M29.7 35.2a10 10 0 00.5-2.9V32a10 10 0 01.9-4.3M21.2 42a10 10 0 006.6-3.5M9.8 42h7.6M2 42h4" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M62 10v50l-22-6-16 6-22-6V4l22 6 16-6 22 6z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
