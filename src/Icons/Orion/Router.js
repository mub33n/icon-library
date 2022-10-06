import React from 'react';

export default function Router(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 16v20" />
      <rect data-name="layer1" x={2} y={36} width={60} height={18} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={11} cy={45} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={21} cy={45} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={31} cy={45} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 54v4m48-4v4M25.1 20a8 8 0 010-8m13.8 0a8 8 0 010 8m-21.2 3.1a16 16 0 010-14.2m28.6 0a16 16 0 010 14.2m-36 3.1A23.9 23.9 0 018 16a23 23 0 012-10m44 0a23 23 0 012 10 23.9 23.9 0 01-2.3 10.2" />
    </svg>
  );
}
