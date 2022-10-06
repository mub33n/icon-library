import React from 'react';

export default function Suv(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M18 52v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6m52 0v6a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6M24 30v4m8-4v4m8-4v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M4 42V27.4C4 23.6 9.7 20 9.7 20L16 4h32l6.3 16s5.7 3.6 5.7 7.4V42" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer1" x={2} y={42} width={60} height={10} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M4 28h10a2 2 0 012 2v4a2 2 0 01-2 2H4m56-8H50a2 2 0 00-2 2v4a2 2 0 002 2h10M9.7 20h44.6m-43.8-2H4m49.5 0H60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
