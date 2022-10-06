import React from 'react';

export default function Jug(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M48 14V8l4-6H24v12m-4 8h-8m0-4v36" />
      <path data-name="layer1" d="M52 26v-8a4 4 0 00-4-4H24a4 4 0 00-4 4v8m0 0v32a4 4 0 004 4h24a4 4 0 004-4V26z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
