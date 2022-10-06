import React from 'react';

export default function LightRain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M50 12h-.5a17 17 0 00-32.3 4.4A11 11 0 1014 38h36a13 13 0 100-26z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M5 56l-2 2.5M13 46l-3.5 4.4m4.3 9.6l-1.6 2M25 46l-6.4 8m12.1-.1L27 58.5M37 46l-1.6 2m4.9 8.8L36.2 62M49 46l-3.9 4.9" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
