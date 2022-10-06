import React from 'react';

export default function BeerBottle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M28 6c-.3 1.7-1 7.6-1.4 12h10.8C37 13.6 36.3 7.7 36 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M39.4 28.3c-1.2-1.1-1.7-3.1-1.8-6.8 0-.9-.1-2.2-.2-3.6H26.6c-.1 1.4-.2 2.7-.2 3.6-.1 3.7-.5 5.7-1.8 6.8A8.2 8.2 0 0022 34v24c0 2 1.8 4 5.6 4h8.8c3.8 0 5.6-2 5.6-4V34a8.2 8.2 0 00-2.6-5.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <ellipse data-name="layer1" cx={32} cy={40} rx={6} ry={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M38 6V4a2 2 0 00-2-2h-8a2 2 0 00-2 2v2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
