import React from 'react';

export default function FullScreen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M20 24h24v16H20z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 18V6h12M2.003 6L14 18m48 0V6H50m11.997 0L50 18M2 46v12h12M2.003 58L14 46m48 0v12H50m11.997 0L50 46" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
