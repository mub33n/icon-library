import React from 'react';

export default function MessageReceived(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M55.3 32.5a17.6 17.6 0 00.7-4.9C56 15.7 43.9 6 29 6S2 15.7 2 27.6c0 6.1 3.1 11.5 8.2 15.5L4 55l17.6-6.6a33.4 33.4 0 007.4.8l3.5-.2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={47} cy={45} r={15} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M53.1 42l-8 8-4-4" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
