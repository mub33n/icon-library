import React from 'react';

export default function Fog(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M62 31a13 13 0 00-13-13h-.5a17 17 0 00-32.3 4.4A11 11 0 002 32" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 38h60M8 46h50m-46 8h16m8 0h20" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
