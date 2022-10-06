import React from 'react';

export default function AmbulanceSiren(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={40} r={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 43v13M2 15l9 9m9-21l4 12m38 0l-9 9M44 3l-4 12" strokeLinejoin="round" />
      <path data-name="layer1" d="M8 56h48a6 6 0 016 6H2a6 6 0 016-6zm4 0V40a20.059 20.059 0 0120-20 20.059 20.059 0 0120 20v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
