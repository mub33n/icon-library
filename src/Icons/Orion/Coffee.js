import React from 'react';

export default function Coffee(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 22l.4 8h35.2l.4-8M15.2 46l.8 16h32l.8-16" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 10h44v12H10zm2 0l4-8h32l4 8m-2.4 20H14.4l.8 16h33.6l.8-16z" />
    </svg>
  );
}
