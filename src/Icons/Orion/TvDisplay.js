import React from 'react';

export default function TvDisplay(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 6.5h60v38H2zm30 46v-8m-20 13a39.6 39.6 0 0120-5 39.6 39.6 0 0120 5" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 12.5h48v26H8z" />
    </svg>
  );
}
