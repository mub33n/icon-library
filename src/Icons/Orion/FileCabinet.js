import React from 'react';

export default function FileCabinet(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 2h48v20H8zm48 20v20H8V22m48 20v20H8V42" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M26 10h12M26 30h12M26 50h12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
