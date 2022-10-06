import React from 'react';

export default function Strikethrough(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M45.6 14.3C45.6 7.5 39.5 2 32 2S18.4 7.5 18.4 14.3 25.1 26.3 32 30l4 2m8 6.6a13.9 13.9 0 013.7 9.1c0 7.9-7 14.3-15.7 14.3s-15.7-6.4-15.7-14.3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 32h60" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
