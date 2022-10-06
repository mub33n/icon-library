import React from 'react';

export default function Podium(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23.3 54h-9.6l6.8-8h.1a4.8 4.8 0 00-6.9-6.6M32 24V10l-4.1 2.1M42 38h8l-4 6s6 0 6 5.1-7.2 6.2-10 2.9M28 24h8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 32h30v30H2zM16 2h30v30H16zm16 30h30v30H32" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
