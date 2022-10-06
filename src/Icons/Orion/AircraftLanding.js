import React from 'react';

export default function AircraftLanding(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M54.1 45.5l-14.9-7-6-25.8a4.1 4.1 0 00-1.7-2.2l-3.1-1.2a1.1 1.1 0 00-1.4 1l-3.8 20.8-9.4-4.4-2.8-8.5s-.4-2-1.4-2.1l-2-.3s-1 .1-1 .9L5.2 32.5c-.1.5.2 1.3 1.6 1.9l43 20.1a5 5 0 104.2-9.1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M55 19v14m6-6.2L55 33l-6-6.2" />
    </svg>
  );
}
