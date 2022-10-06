import React from 'react';

export default function Camping(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M62 61.995V45.997L44.531 23.995H20.898L2 45.997v15.998h60z" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <path d="M44.531 23.995L26.004 45.997 26 61.995m29.996.003L44.531 39.996 32.006 61.998m-6.002-16.001H2" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={8} cy="9.997" cx={10} data-name="layer1" />
    </svg>
  );
}
