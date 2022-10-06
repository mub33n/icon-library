import React from 'react';

export default function SecurityShield(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M6 2h52v22.064A41.973 41.973 0 0131.994 62 41.97 41.97 0 016 24.064z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 27l9 9 15-16" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
