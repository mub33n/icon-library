import React from 'react';

export default function Tornado(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 5h56m-46 8h50M8 21h44m-40 8h30" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 37h28m-20 8h20m-16 8h10m-12 8h4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
