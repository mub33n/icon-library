import React from 'react';

export default function ApproveComment(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M56 32V9H2v36h14v9.9L26.8 45H32" />
      <circle data-name="layer1" cx={47} cy={44} r={15} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M53 41.1l-8 8-4-4" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
