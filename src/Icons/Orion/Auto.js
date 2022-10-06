import React from 'react';

export default function Auto(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M5.044 28H49c11 0 13 4.719 13 7v7h-4m-35.998.001h24" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M10 42H2v-8s6-18 24-18h11.418a3.717 3.717 0 013.074 2L46 28M9.995 22.138L2 18.002" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={6} cy={42} cx="16.002" data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={6} cy={42} cx="52.002" data-name="layer1" />
    </svg>
  );
}
