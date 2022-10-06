import React from 'react';

export default function WorldGlobe(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" ry={30} rx="16.1" cy={32} cx={32} data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M4.5 44h55m-55-24h55M32 2v60" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={30} cy={32} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
