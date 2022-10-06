import React from 'react';

export default function Autobus(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M29.1 8H35M20 54v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6m44 0v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M16.1 46H22m20.1 0H48M8 16h48M8 38h48m0 16V6a4 4 0 00-4-4H12a4 4 0 00-4 4v48z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
