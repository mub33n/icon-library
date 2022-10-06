import React from 'react';

export default function Army(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M56 51L32 61 8 51V3h48v48z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M56 41L32 51 8 41" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 32.5l-9.9 7.2 3.8-11.6L16 21h12.2L32 9.5 35.8 21H48l-9.9 7.1 3.8 11.6-9.9-7.2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
