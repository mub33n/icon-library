import React from 'react';

export default function RamMemory(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M58 39v10H6V39m10.1 4v6m7.9-6v6m8-6v6m8-6v6m8-6v6" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 15h60v24H2z" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 39V23h44v16M24 23.3V39m16-15.7V39" />
    </svg>
  );
}
