import React from 'react';

export default function Drizzle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M49 12h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 38h36a13 13 0 100-26z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 45v10M36 45v4m-10-4v10M16 45v6m0 5v2m10 2v2m10-8v2m10 4v2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
