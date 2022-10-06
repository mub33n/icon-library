import React from 'react';

export default function Puzzle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M56 38a5.9 5.9 0 00-4.5 2c-1.4 1.4-5.5 2-5.5-2V18H30c-4 0-3.4-4.1-2-5.5a6 6 0 10-8 0c1.4 1.4 2 5.5-2 5.5H2v8c0 4 4.1 3.4 5.5 2a5.9 5.9 0 014.5-2 6 6 0 11-4.5 10C6.1 34.6 2 34 2 38v24h24c4 0 3.4-4.1 2-5.5a5.9 5.9 0 01-2-4.5 6 6 0 1110 4.5c-1.4 1.4-2 5.5 2 5.5h8V50c0-4 4.1-3.4 5.5-2A6 6 0 1056 38z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
