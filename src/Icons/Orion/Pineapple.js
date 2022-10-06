import React from 'react';

export default function Pineapple(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M50 41c0 11.6-6 21-18 21s-18-9.4-18-21 6-21 18-21 18 9.4 18 21z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M32 18c-12 0-13.6-8-13.6-8S32 8.2 32 18M46 2C34.6 2 34 12 34 18 46.7 18 46 7.1 46 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17.9 27.9l27.3 27.3M14 40l21.6 21.6m-8.9-40.9l23.1 23.1m-3.8-16L18.7 55.1M50 39.9L28.3 61.6M37 20.8L14.1 43.7" />
    </svg>
  );
}
