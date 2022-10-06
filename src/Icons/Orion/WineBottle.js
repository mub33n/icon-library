import React from 'react';

export default function WineBottle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M22 52v7c0 1.7 1.7 3 7.6 3h4.7c6.3 0 7.6-1.3 7.6-3v-7m.1-22v-2c0-6-6-12-6-16m-8 0c0 4-6 10-6 16v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 2h8v10h-8zm-6 28h20v22.01H22z" />
    </svg>
  );
}
