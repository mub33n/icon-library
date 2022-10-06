import React from 'react';

export default function Sailboat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M30 8c9.7 3.2 24 14.9 24 34H11S25.2 30.1 30 8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M58 50H6l10 12h38l4-12zm-28 0V2" />
    </svg>
  );
}
