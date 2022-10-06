import React from 'react';

export default function SteeringWheel(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M32 22c9.1 0 16.3 4 21.3 4A21.6 21.6 0 0032 10a21.6 21.6 0 00-21.3 16c4.9 0 12.2-4 21.3-4zm6 14c-2.6 3.6-1.3 11.1.9 16.9C47.4 50 53.6 43.4 54 34c-4.3 0-14.4-.3-16 2zm-12 0c2.6 3.6 1.3 11.1-.9 16.9C16.6 50 10.3 43.4 10 34c4.3 0 14.4-.3 16 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
