import React from 'react';

export default function AddGeotag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M36.6 31.8a25.1 25.1 0 003.3-9.6A18 18 0 104 20a17.7 17.7 0 00.2 2.2C5.7 36.8 22 44.9 22 62c0-7 2.7-12.5 6.1-17.6" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={6} cy={20} cx={22} data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={16} cy={46} cx={44} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M44 38v16m-8-8h16" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
