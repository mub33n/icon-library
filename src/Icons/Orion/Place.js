import React from 'react';

export default function Place(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M16 62l32-14m0 14L16 48" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M49.9 21.8c.1-.6.1-1.1.1-1.7a18 18 0 10-36 0c0 .6 0 1.2.1 1.8v.1C15.5 36.2 32 47.1 32 47.1s16.4-11 17.9-25z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={10} cy={20} cx={32} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
