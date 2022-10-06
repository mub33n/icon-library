import React from 'react';

export default function UsbConnected(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M29.4 58H8V26h32v4m-28-4V2h24v24m-8-10v-6m-8 6v-6" />
      <circle data-name="layer1" cx={40} cy={46} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M47 42l-8 9-5-5" />
    </svg>
  );
}
