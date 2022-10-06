import React from 'react';

export default function Tablet(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M54 4a2 2 0 00-2-2H12a2 2 0 00-2 2v6h44zM10 60a2 2 0 002 2h40a2 2 0 002-2V50H10zm44-10V10m-44 0v40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 17h6v6h-6zm12 0h6v6h-6zm12 0h6v6h-6zM17 29h6v6h-6zm12 0h6v6h-6z" />
      <circle data-name="layer1" cx={32} cy={56} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
