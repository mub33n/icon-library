import React from 'react';

export default function Repository(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 46v15.5M20 62h24m-28 0h-4m-4 0H4m48 0h-4m12 0h-4" />
      <rect data-name="layer1" x={2} y={14} width={60} height={32} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M2.4 14.8L7.4 4A3 3 0 0110 2h44a2.9 2.9 0 012.5 2l5.2 10.8M54 38H34m20-16H34M2 30h60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={11} cy={22} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={11} cy={38} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
