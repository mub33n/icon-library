import React from 'react';

export default function ChatMessage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M4 60l19.8-7.9a37.1 37.1 0 008.2.9c16.6 0 30-10.7 30-24S48.6 5 32 5 2 15.7 2 29c0 6.7 3.5 12.8 9.1 17.2z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 19h28M18 29h28M18 39h16" />
    </svg>
  );
}
