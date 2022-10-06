import React from 'react';

export default function OpenInWindow(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 20h16v38H14V27" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M24 14V5l22 15-22 15v-9c-8.447.002-15.379.324-22 12 0-7.416 0-24 22-24z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
