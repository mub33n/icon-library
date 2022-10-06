import React from 'react';

export default function BalloonWhisk(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M8.6 61A4 4 0 013 61a4 4 0 010-5.7l9.9-9.9a4 4 0 015.7 0 4 4 0 010 5.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18.5 45.5L58.1 5.9m0 19.8a14 14 0 10-23-14.9l-12 30.1 30.2-12a13.9 13.9 0 004.8-3.2z" />
      <path data-name="layer1" d="M53.9 21.5C59.3 16 61.2 9 58.1 5.9S48 4.7 42.5 10.1a23.1 23.1 0 00-3.5 4.5L23 40.9 49.4 25a23.2 23.2 0 004.5-3.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
