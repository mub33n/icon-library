import React from 'react';

export default function BeerPint(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M48 22.7a8 8 0 00-4-14.9 7.9 7.9 0 00-2.3.4 6 6 0 00-9.1-3.1A11 11 0 0015.2 8H15a9 9 0 00-3 17.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M48 22v37a3 3 0 01-3 3H15a3 3 0 01-3-3V22zM30 32v20M20 32v20m20-20v20m8-26h4a6 6 0 016 6v12a6 6 0 01-6 6h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M48 46h4a2 2 0 002-2V32a2 2 0 00-2-2h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
