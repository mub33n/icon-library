import React from 'react';

export default function MokaCoffeePot(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11 26L7 8h8m6-6h24" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M43 34v8m-20-8v8M57 8l-9.3 14.2L45 34H21L15 8h42zM43 8l-2 26M23 8l2 26m20 8H21l-6 20h36l-6-20zm-4 0l2 20M25 42l-2 20" />
    </svg>
  );
}
