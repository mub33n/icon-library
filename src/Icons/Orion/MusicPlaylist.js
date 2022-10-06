import React from 'react';

export default function MusicPlaylist(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 16H2v34h8m44-34h8v34h-8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M33.7 36H30a4 4 0 104 4v-1l-2-19s8 0 8 8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 10h44v44H10z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
