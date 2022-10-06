import React from 'react';

export default function Artboard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 18h36v28H14z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 18H2m6 28H2m60-28h-6M50 6v6M14 6v6m36 40v6m-36-6v6m48-12h-6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
