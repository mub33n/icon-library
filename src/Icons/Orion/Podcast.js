import React from 'react';

export default function Podcast(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M44 22.6a15.9 15.9 0 001-5.6c0-8.3-6.3-15-14-15S17 8.7 17 17a15.3 15.3 0 006.1 12.4A24.1 24.1 0 007 52h40" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M47 50v12m8 0H39m16-20a8 8 0 01-8 8 8 8 0 01-8-8V30a8 8 0 018-8 8 8 0 018 8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
