import React from 'react';

export default function CableCar(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 18L60 8M32 24V13.1m-10 1.7v-4A5 5 0 0126 6l12-1.9a3.2 3.2 0 014 3.3v3.9" data-name="layer2" />
      <path d="M10 24h44c4.5 0 8 6.4 8 19s-2.7 19-8 19H10c-3.4 0-8-6.4-8-19s5.8-19 8-19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} data-name="layer1" />
      <rect data-name="layer1" x={14} y={32} width={36} height={18} rx={3} ry={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 32v18m12-18v18" />
    </svg>
  );
}
