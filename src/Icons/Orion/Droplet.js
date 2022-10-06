import React from 'react';

export default function Droplet(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 44h7a13 13 0 100-26h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 44h9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M38 53.4a6.2 6.2 0 00-.3-1.5C36.5 47.6 32 42 32 42s-4.5 5.6-5.7 9.9a6.2 6.2 0 00-.3 1.5v.5a6 6 0 1012 0v-.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
