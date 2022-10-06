import React from 'react';

export default function Donut(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M54 24c-6 1.8-7.1-3.5-6-6-4.5 1.2-8.9-1.9-6-8-3.4-.7-5.7-4.3-3.9-7.4A30.3 30.3 0 1061.7 28c-4.4.8-6.8-1-7.7-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 12l2 2m-8 4l-4 4m-6-4v4m0 8l-2 2m6 4v4m-2 6l2 2m10 2l2 2m10-4l-2 2m10-4v4m1.8-12l4.2 4m4-10v4" />
    </svg>
  );
}
