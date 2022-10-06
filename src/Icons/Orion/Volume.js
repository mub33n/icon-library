import React from 'react';

export default function Volume(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M40.2 21.8a12 12 0 010 20.5M46 16a20 20 0 010 32m5.7-37.7a28 28 0 01.1 43.3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M34 6L16 24H4a2 2 0 00-2 2v12a2 2 0 002 2h12l18 18z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
