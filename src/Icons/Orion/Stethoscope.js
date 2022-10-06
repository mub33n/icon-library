import React from 'react';

export default function Stethoscope(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M59 24V6a4 4 0 00-4-4M33 2a4 4 0 00-4 4v18M10 48V26a6.018 6.018 0 016-6 6.018 6.018 0 016 6v25a11.032 11.032 0 0011 11 11.032 11.032 0 0011-11v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M27 24h4a13 13 0 0026 0h4a17.017 17.017 0 01-15 16.872V43a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.128A17.017 17.017 0 0127 24z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={10} cy={55} r={7} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={10} cy={55} r={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
