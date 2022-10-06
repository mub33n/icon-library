import React from 'react';

export default function SwitchCamera(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M59 17H46.6L40 9H24l-6.6 8H5a3 3 0 00-3 3v30a3 3 0 003 3h54a3 3 0 003-3V20a3 3 0 00-3-3z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M38 33l4 4 4-4m-20 0l-4-4-4 4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M36.7 41.8A9.8 9.8 0 0125 40.1a10.1 10.1 0 01-2.3-10.4m4.6-5.5A9.8 9.8 0 0139 25.9a10.1 10.1 0 012.3 10.4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
