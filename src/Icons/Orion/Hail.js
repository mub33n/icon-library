import React from 'react';

export default function Hail(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M49 12h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 38h36a13 13 0 000-26z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M44 46v16m-8-16v6m-8-6v10m-8-10v16m-10-5.9A10 10 0 0120 62m34-5.9A10 10 0 0044 62" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={4} cy={56} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={60} cy={56} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
