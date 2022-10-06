import React from 'react';

export default function ElectricalStorm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 40.1h7a13 13 0 100-26h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 40.1h9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M36 35.6L26 48.1h8L24.4 60m-11-13.9l-4.8 6h6l-4.8 6m37-12l-4.8 6h6l-4.8 6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
