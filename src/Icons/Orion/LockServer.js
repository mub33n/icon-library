import React from 'react';

export default function LockServer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M38 44h24v16H38zm6 0V34a6 6 0 016-6 6 6 0 016 6v10m-6 6v4" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M38 50H4a2 2 0 01-2-2V4a2 2 0 012-2h48a2 2 0 012 2v25.5M39 26h-9m3 16h-3m16-32H30" data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy={10} cx={11} data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy={26} cx={11} data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy={42} cx={11} data-name="layer1" />
      <path d="M54 18H2m42 16H2" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
    </svg>
  );
}
