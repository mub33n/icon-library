import React from 'react';

export default function Trailer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer1" x={10} y={24} width={16} height={12} rx={3} ry={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M13 50H5a3 3 0 01-3-3V13a3 3 0 013-3h32a3.8 3.8 0 012.1.9l12.4 12.3c1.2 1.3 2.5 2.1 2.5 4.8v19a3 3 0 01-3 3H21" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 50V24h12v26m7 0h11v-6" />
      <circle data-name="layer1" cx={17} cy={53} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
