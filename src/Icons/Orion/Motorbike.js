import React from 'react';

export default function Motorbike(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer1" cx={32} cy={20} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M21.4 23.4A6 6 0 0123.5 12m19.1 11.4A6 6 0 0040.5 12m-15.9 1a8 8 0 1114.8 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M10 10h8a8.2 8.2 0 015.9 2.4l3.7 3.6M54 10h-8a8.2 8.2 0 00-5.9 2.4L36.4 16M26 51.7a8 8 0 01-6-7.7V28a8 8 0 016-7.7m12 0a8 8 0 016 7.7v16a8 8 0 01-6 7.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 34v28" />
    </svg>
  );
}
