import React from 'react';

export default function Speedboat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 22.1l1.9 7.7m8.7-.2l3.4-7.5s10.4 1.4 14 7.1" />
      <path data-name="layer2" d="M14 30.1l48-.9s-4.7 10.9-27 10.9H10.7l-2.3-5.8m5.6 5.8l-4 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer1" x={2} y={26} width={12} height={8} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
