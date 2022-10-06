import React from 'react';

export default function CuttingBoard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 18v10m22-4v8m-10 4v10m12 2v6M24 32v6m4 14v4" />
      <path data-name="layer1" d="M50 8c-3.9 0-8.7-2.2-11.4-4a12 12 0 00-13.2 0h-.2A20.8 20.8 0 0114 8a4 4 0 00-4 4v46a4 4 0 004 4h36a4 4 0 004-4V12a4 4 0 00-4-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M37 12a2 2 0 01-2 2h-6a2 2 0 01-2-2 2 2 0 012-2h6a2 2 0 012 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
