import React from 'react';

export default function Inkpot(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M48 4.7C41.1 8 34 15.1 34 30c12 0 28-2.3 28-28L29.9 34.1M48 4.7V16m-.1 0h11.9M42 22h14.5" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M24 46.5V43a1 1 0 011-1h1a1.1 1.1 0 001-1v-4a1 1 0 00-1-1H14a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 011 1v3.5A18.6 18.6 0 002 62h36a18.6 18.6 0 00-14-15.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
