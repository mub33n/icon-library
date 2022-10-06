import React from 'react';

export default function SteamTrain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 62l11.7-6.1M56 62l-11.7-6.1" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M42.3 40H46l4 14-18 6-18-6 4-14h3.6" />
      <path data-name="layer2" d="M36.3 22.9h1.3a8.2 8.2 0 004.4-1.3 4.8 4.8 0 007.8-5 4.5 4.5 0 00-.8-8.8l-1.5.3a3 3 0 00-4.3-1.9 4.9 4.9 0 00-9.5-.6 4.2 4.2 0 10-3.8 6.4 8.5 8.5 0 00-.5 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 46v14" />
      <circle data-name="layer1" cx={32} cy={34} r={12} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={34} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 14v8.7m8 0V14m-10 0h12" />
    </svg>
  );
}
