import React from 'react';

export default function Network(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 2h32v22H6zm20 30H2v-2l4-6m38-8h-6m14 4v-4h-4m4 12v-4m-10 8v-2l-4-6" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 32h32v22H26zm0 22l-4 6v2h40v-2l-4-6m-38-6h6m-14-4v4h4m-4-12v4" />
    </svg>
  );
}
