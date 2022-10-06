import React from 'react';

export default function Playlist(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46 45h-8a8 8 0 108 8V3c6 4 16 2.3 16 14-12-2-16-2-16-2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 15h32M2 25h32M2 35h32M2 45h16" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
