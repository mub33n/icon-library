import React from 'react';

export default function Bug(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M60 9C50 3.8 36-1.5 34 9.3M4 9c10-5.2 24-10.5 26 .3m12 11.3l8-5.6 4 10m-9.9 12l9.9-4 2 10m-14.5 8H52l2 10M22 20.6L14 15l-4 10m9.9 12L10 33 8 43m14.5 8H12l-2 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M24.7 14.3a11.4 11.4 0 0014.6 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <ellipse data-name="layer1" cx={32} cy={35} rx={12} ry={26} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20.6 27h22.8M32 27v34" />
    </svg>
  );
}
