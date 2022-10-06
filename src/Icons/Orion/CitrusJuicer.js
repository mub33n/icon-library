import React from 'react';

export default function CitrusJuicer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M10 28c-4 0-8 1.8-8 8v14m42-22c0-5.2-4-13.9-12-18-8 3.7-12 13-12 18m12 0V10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M62 28l-8 16v4c0 2.2-.6 6-6 6H16c-4 0-6-1.7-6-6V28z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
