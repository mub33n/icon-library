import React from 'react';

export default function SetSquare(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M60.6 60.6H3.4V3.4l57.2 57.2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M37.4 52.6h-26v-26l26 26z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M9.4 15.8l3.2-3.2m3.2 9.7l3.3-3.2m3.2 9.6l3.2-3.2m3.3 9.7L32 32m3.3 9.7l3.2-3.2m3.2 9.7l3.2-3.3m3.3 9.7l3.2-3.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
