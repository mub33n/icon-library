import React from 'react';

export default function SodaCan(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 10l6 6" />
      <circle data-name="layer2" cx={34} cy={3} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={42} cy={7} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={36} cy={11} r={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M23 16c0 4-4.8 6.3-5.1 6.6s-.9.7-.9 1.3v33a2.1 2.1 0 00.4 1.4l3.5 3.2c.3.3.5.5.8.5h20.5c.4 0 .6-.2.8-.5l3.5-3.2a2.1 2.1 0 00.4-1.4V24c0-.6-.6-1.1-.9-1.3S41 20 41 16m-20 0h22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
