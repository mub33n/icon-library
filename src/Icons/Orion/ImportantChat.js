import React from 'react';

export default function ImportantChat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M4 59l19.8-7.9a37.1 37.1 0 008.2.9c16.6 0 30-10.7 30-24S48.6 4 32 4 2 14.7 2 28c0 6.7 3.5 12.8 9.1 17.2z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M34 32a2 2 0 01-4 0l-1-15a2.7 2.7 0 013-3 2.7 2.7 0 013 3z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={41} r={2} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
