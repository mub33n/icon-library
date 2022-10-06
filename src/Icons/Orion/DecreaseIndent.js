import React from 'react';

export default function DecreaseIndent(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 32H2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 4h40m-40 8h40M22 52h40m-40 8h40M40 20h22m-22 8h22m-22 8h22m-22 8h22" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 20L2 32l12 12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
