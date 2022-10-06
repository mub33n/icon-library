import React from 'react';

export default function Layers(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 46v10H2V28h8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M54 36v10H10V18h8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 8h44v28H18z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
