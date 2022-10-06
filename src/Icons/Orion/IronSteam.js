import React from 'react';

export default function IronSteam(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M10 4h44l8 32H2a18 18 0 0118-18h37.5" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M23.3 42L16 58m24.7-16L48 58M32 48v12" strokeLinejoin="round" />
    </svg>
  );
}
