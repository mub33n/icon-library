import React from 'react';

export default function Presentation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 62V42M16 60l16-18m16 18L32 42" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 42h60M6 42V2h52v40M6 10h52" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
