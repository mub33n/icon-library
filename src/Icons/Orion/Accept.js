import React from 'react';

export default function Accept(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" aria-labelledby="title" aria-describedby="desc" width={24} height={24} stroke="currentColor" {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 6h60v12H2zm0 12v40h60V18" />
      <circle data-name="layer2" cx={8} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={15} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={22} cy={12} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M42 30L28 44l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
