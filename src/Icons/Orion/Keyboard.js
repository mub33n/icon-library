import React from 'react';

export default function Keyboard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer1" x={2} y={14} width={60} height={36} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 20h4v4h-4z" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 20h4v4h-4zm10 0h4v4h-4zm10 0h4v4h-4zm10 0h4v4h-4zM10 30h4v4h-4zm0 10h4v4h-4z" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 40h34v4H20z" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 30h4v4h-4zm10 0h4v4h-4zm10 0h4v4h-4zm10 0h4v4h-4z" />
    </svg>
  );
}
