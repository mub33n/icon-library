import React from 'react';

export default function SilentMode(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M34 6L16 24H4a2 2 0 00-2 2v12a2 2 0 002 2h12l18 18z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 24l16 16m0-16L46 40" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
