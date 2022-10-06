import React from 'react';

export default function HalfSun(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M26.1 45.9a14 14 0 0119.8-19.8M36 6v8M14 36H6m8.8-21.2l5.6 5.6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M57.2 14.8L14.8 57.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
