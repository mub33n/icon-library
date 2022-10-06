import React from 'react';

export default function CloudyHailstorm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M45.9 38A10.1 10.1 0 0056 28.1a10.1 10.1 0 00-10.2-9.9h-1A13.6 13.6 0 0032.2 10a13.5 13.5 0 00-13.5 11.5h-.1a8.2 8.2 0 100 16.5zM15.7 22A10 10 0 1126 11.4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M44 46v16m-8-16v6m-8-6v10m-8-10v16m-10-5.9A10 10 0 0120 62m34-5.9A10 10 0 0044 62" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={60} cy={56} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={4} cy={56} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
