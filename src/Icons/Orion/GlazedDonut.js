import React from 'react';

export default function GlazedDonut(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M58.6 45.8a30 30 0 01-48.9 6.3M18 14l4 4m-8 8l-4 4m2 8h4m10-28h8m10 4l-4 4m10 6l4 2m-4 8v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={32} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M9.7 52.1a30 30 0 1148.9-6.3M9.7 52.1c1.9-.3 3-3 4.3-6.1s7.2-2.6 6 2 2.9 7.3 5.8 6 3.1-2.6 6.3-2 6.1.5 7.9-2.4 2.8-.2 6 .4 4-8 12.6-4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
