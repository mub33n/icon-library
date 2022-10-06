import React from 'react';

export default function ComputerNetwork(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 52H4V36h22v16zM4 52l-2 4v2h26v-2l-2-4" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M43 22H21V6h22v16zm-22 0l-2 4v2h26v-2l-2-4m17 30H38V36h22v16zm-22 0l-2 4v2h26v-2l-2-4" />
    </svg>
  );
}
