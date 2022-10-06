import React from 'react';

export default function Focus(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M21 62H2V43m60 0v19H43m0-60h19v19M2 21V2h19" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M13 13h38v38H13z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
