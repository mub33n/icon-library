import React from 'react';

export default function CoffeeJug(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24.7 18a24 24 0 00-10 14m46.5 0a24 24 0 00-10-14M14.8 32a24 24 0 007.4 24h31.6a24 24 0 007.4-24z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M60 8s-35.3 2.3-40.9 3.3S2 22.6 2 38c0 2.4.3 4 2 4s1.8-1.5 2-4 6-20 16-20h32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
