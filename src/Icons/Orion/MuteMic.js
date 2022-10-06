import React from 'react';

export default function MuteMic(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23.6 35.4A10 10 0 0123 32V12A10 10 0 0133 2a10 10 0 0110 10v4m0 10v6a10 10 0 01-10 10 10 10 0 01-4-.8m-11.4.2A17.9 17.9 0 0115 32V22" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M51 22v10a18 18 0 01-18 18 17.9 17.9 0 01-10-3m10 3v12m-10 0h20" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M57 2L7 52" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
