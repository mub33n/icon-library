import React from 'react';

export default function SearchDatabase(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse data-name="layer2" cx={25} cy={10} rx={23} ry={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M48 36V10m0 12c0 4.4-10.3 8-23 8S2 26.4 2 22m35.5 18.7A58.1 58.1 0 0125 42c-12.7 0-23-3.6-23-8" />
      <path data-name="layer2" d="M38.4 52.5A56.8 56.8 0 0125 54c-12.7 0-23-3.6-23-8V10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={46} cy={46} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M53.2 53.2L62 62" />
    </svg>
  );
}
