import React from 'react';

export default function FavoriteImage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 46h30.9m4.4 12H2V2h48v42" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M46 54.9L36.1 62l3.8-11.5L30 44h12.2L46 32l3.8 12H62l-9.9 6.5L55.9 62z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
