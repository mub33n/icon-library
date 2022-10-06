import React from 'react';

export default function NewChat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M55.3 31.5a17.6 17.6 0 00.7-4.9C56 14.7 43.9 5 29 5S2 14.7 2 26.6c0 6.1 3.1 11.5 8.2 15.5L4 54l17.6-6.6a33.3 33.3 0 007.4.8l3.5-.2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M47 37v14m7-7H40" />
      <circle data-name="layer1" cx={47} cy={44} r={15} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
