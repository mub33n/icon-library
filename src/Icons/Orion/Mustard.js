import React from 'react';

export default function Mustard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse data-name="layer2" cx={32} cy={40} rx={6} ry={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M22 22l3.1-10H39l3 10M28 12l2.7-10h2.8L36 12" />
      <rect data-name="layer1" x={20} y={22} width={24} height={40} rx={3} ry={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
