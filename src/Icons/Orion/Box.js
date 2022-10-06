import React from 'react';

export default function Box(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 62V20L14 2h36l12 18v42H2zm0-42h60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M46 34a4 4 0 01-4 4H22a4 4 0 01-4-4 4 4 0 014-4h20a4 4 0 014 4z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
