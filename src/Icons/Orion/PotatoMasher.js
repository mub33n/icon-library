import React from 'react';

export default function PotatoMasher(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M23.3 40.7L39 25M36.2 4.9l22.9 22.9M34.7 12L52 29.3M33.3 19.2l11.5 11.5M43.4 3.4l17.2 17.2M50.5 2L62 13.5" />
      <path data-name="layer1" d="M8.9 60.8a4.1 4.1 0 01-5.7 0 4.1 4.1 0 010-5.7l14.3-14.4a4.1 4.1 0 015.7 0 4.1 4.1 0 010 5.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
