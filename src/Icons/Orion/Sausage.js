import React from 'react';

export default function Sausage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6.5 61.7l5.8-9.7 7.2 8.2M62 6.3L52.2 12l8.3 7.2" />
      <path data-name="layer1" d="M13.8 14C0 27.8.1 43.4 5.1 48.7s11.1 4.1 14.7-3.1.6-12.2 6.9-18.6 14.7-4.2 19-6.3S56 12.8 48.5 5.3s-26.1 0-34.7 8.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
