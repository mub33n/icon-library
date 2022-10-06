import React from 'react';

export default function Blender(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M15.6 46h-2l-3 11.8c-.5 2.2-.2 4.2 3 4.2h30c1.9 0 3.7-1 3-3.9l-3-12.1h-2m1.7-32h2.3a8 8 0 018 8v8a8 8 0 01-8 8H42" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M42.2 34h3.4a4 4 0 004-4v-8a4 4 0 00-4-4h-2.5M13.6 8V5a3 3 0 013-3h24a3 3 0 013 3v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14.3 22l1.3 24h26l1.2-24M13.6 8l.7 14h28.5l.8-14h-30z" />
      <circle data-name="layer1" cx="28.6" cy={54} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
