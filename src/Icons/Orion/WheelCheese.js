import React from 'react';

export default function WheelCheese(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M44 49.6c10.6-1.5 18-5.1 18-9.2v-16m-60 0v16c0 4.1 7.4 7.6 18 9.2m0-16v16l12-7.2 12 7.2v-16m-12-9.2v18.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M32 14.4c-16.6 0-30 4.5-30 10s7.4 7.6 18 9.2l12-9.2 12 9.2c10.6-1.5 18-5.1 18-9.2s-13.4-10-30-10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
