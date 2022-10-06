import React from 'react';

export default function Stopwatch(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer1" x="50.896" y="8.453" width="10.209" height="5.104" rx={1} ry={1} transform="rotate(45 56 11.005)" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M49.877 17.128l4.318-4.318" strokeLinejoin="round" />
      <circle data-name="layer2" cx={32} cy="36.006" r={26} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M29 10.177V4.006a1 1 0 011-1h4a1 1 0 011 1v6.171" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 16.006v17" strokeLinejoin="round" />
      <circle data-name="layer1" cx={32} cy="36.006" r={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 39.006v6.031" strokeLinejoin="round" />
    </svg>
  );
}
