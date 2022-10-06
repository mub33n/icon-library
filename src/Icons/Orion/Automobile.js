import React from 'react';

export default function Automobile(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M8 26.5s1-12.2 1.4-15.2A5.7 5.7 0 0114.9 6h34.2a5.7 5.7 0 015.5 5.3c.4 3 1.4 15.2 1.4 15.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M16 50v7a3 3 0 01-3 3H9a3 3 0 01-3-3v-7m52 0v7a3 3 0 01-3 3h-4a3 3 0 01-3-3v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M62 50V34.2a5 5 0 00-1.3-3.5l-2-2C57.5 27.5 56 26 54 26H10c-2 0-3.4 1.5-4.7 2.7l-2 2A5 5 0 002 34.2V50z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer1" x={10} y={36} width={10} height={6} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer1" x={44} y={36} width={10} height={6} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 40h8" />
    </svg>
  );
}
