import React from 'react';

export default function Excavator(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M46.5 20L34 38H2V24h12l6 6h13.8" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42.5 17.9L36 24 24.5 12H14v12" />
      <circle data-name="layer2" cx={46} cy={16} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M54.8 23.6l-6-4.8" />
      <circle data-name="layer1" cx={57} cy="25.6" r={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M54.8 27.6L42 44h16c1.9 0 5.3-.6 4-4l-4.3-11.4M38 49a5 5 0 01-5 5H7a5 5 0 01-5-5 5 5 0 015-5h26a5 5 0 015 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
