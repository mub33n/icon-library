import React from 'react';

export default function Data(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={32} cy={32} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M20 32v-.8L9.3 39.9a23.9 23.9 0 004.1 7.3L26 42.4A12 12 0 0120 32zm24-.6v.6a12 12 0 01-6 10.4l12.6 4.8a24 24 0 004-7.2zM32 20a11.9 11.9 0 016.5 1.9L36.1 8.4a22.5 22.5 0 00-8.1 0L25.4 22a11.9 11.9 0 016.6-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
