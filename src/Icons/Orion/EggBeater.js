import React from 'react';

export default function EggBeater(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M23 62V34m5.9 21.1v-.6c-1.1-4.5-6-12.2-6-14.5 0 2.3-4.7 10.1-5.7 14.5v.5a5.9 5.9 0 00-.1 1 6 6 0 0012 0 5.7 5.7 0 00-.2-.9zM11 60.4A6 6 0 019.1 56a6.1 6.1 0 01.1-1v-.5C10.3 50.1 15 42.3 15 40v-6" />
      <circle data-name="layer2" cx={14} cy={25} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={14} cy={17} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M45 13a5 5 0 01-5 5H26a5 5 0 01-5-5 5 5 0 015-5h14a5 5 0 015 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M58.5 25.9l-5-16.1A10.5 10.5 0 0043 2H5v32h48c4 0 7.1-2.9 5.5-8.1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
