import React from 'react';

export default function Sedan(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M48 28l-5.5-10a3.7 3.7 0 00-3.1-2H17.3a3.2 3.2 0 00-2.6 2l-5 10M58 42h4V31a3 3 0 00-3-3H5a3 3 0 00-3 3v11h4m12 0h28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={12} cy={42} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={52} cy={42} r={6} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
