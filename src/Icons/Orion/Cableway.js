import React from 'react';

export default function Cableway(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 20L62 2" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 54V22" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 22V11" />
      <path data-name="layer1" d="M22 22v29.6a2.4 2.4 0 002.3 2.4h15.3a2.4 2.4 0 002.4-2.4V22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M21 62c-5.4 0-7.4-2.4-8.7-6L9 47.3a14.5 14.5 0 010-10.6l3.3-8.7a8.6 8.6 0 018.7-6h22a8.6 8.6 0 018.7 6l3.3 8.7a14.5 14.5 0 010 10.6L51.7 56c-1.3 3.6-3.3 6-8.7 6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
