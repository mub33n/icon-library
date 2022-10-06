import React from 'react';

export default function AircraftClimb(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M61.5 19.9a5 5 0 00-6.6-2.4L40 24.4l-23.7-12a4.1 4.1 0 00-2.8-.1l-2.9 1.5a1.1 1.1 0 00-.2 1.7L24 31.9l-9.5 4.4-8.3-3.4s-1.8-.9-2.5-.3l-1.4 1.3s-.6.8 0 1.4l11.2 11.3c.4.4 1.1.7 2.5 0l43-20.1a5 5 0 002.5-6.6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M54 53V39m6 6.2L54 39l-6 6.2" />
    </svg>
  );
}
