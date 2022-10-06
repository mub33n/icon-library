import React from 'react';

export default function Bus(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M52 44h8.5a1.5 1.5 0 001.5-1.5V28l-2-9c-.6-1.7-1.3-3-3-3H5a3 3 0 00-3 3v23a2.2 2.2 0 002 2h6m8 0h26M2 30h50m0-13.8V44M19 30V16m17 14V16" data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy={44} cx={14} data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy={44} cx={48} data-name="layer2" />
      <path d="M52 36h10" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
    </svg>
  );
}
