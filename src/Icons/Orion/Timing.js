import React from 'react';

export default function Timing(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" r={30} cy={32} cx={32} data-name="layer2" strokeLinejoin="round" />
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M44.79 45.666a.25.25 0 00.348-.352L36 32 32.259 9.235a.25.25 0 00-.5 0L28.091 31.15a3.936 3.936 0 001.427 3.968z" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
