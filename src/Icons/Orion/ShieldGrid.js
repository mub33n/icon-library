import React from 'react';

export default function ShieldGrid(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 2l-.006 60M6.358 29h51.28" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M6 2h52v22.064A41.975 41.975 0 0131.994 62 41.97 41.97 0 016 24.064z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
