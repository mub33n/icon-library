import React from 'react';

export default function Direction(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M11 44l-8 8 8 8m42-40l8-8-8-8" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M60.8 12H12A10 10 0 002 22a10 10 0 0010 10h40a10 10 0 0110 10 10 10 0 01-10 10H3" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
