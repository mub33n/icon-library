import React from 'react';

export default function Fish(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy="30.998" cx="49.002" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M43.884 19.046C43.69 18.853 32 8 32 8v10.283m11.788 26.96L30 56V45.176" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M62 34c-2-6-12.307-16-26-16a27.571 27.571 0 00-24 14C8 40 2 42 2 42V22s6 2 10 10c2.525 5.053 12.891 14 24 14s24-6 26-12z" data-name="layer1" />
    </svg>
  );
}
