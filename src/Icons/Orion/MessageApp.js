import React from 'react';

export default function MessageApp(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M38 42v16a4 4 0 01-4 4H8a4 4 0 01-4-4V6a4 4 0 014-4h22M4 10h24M4 48h34" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={21} cy={55} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M59.4 2H30.6A2.6 2.6 0 0028 4.6v18.8a2.6 2.6 0 002.6 2.6H38v7l7-7h14.4a2.6 2.6 0 002.6-2.6V4.6A2.6 2.6 0 0059.4 2z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={45} cy={14} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={37} cy={14} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={53} cy={14} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
