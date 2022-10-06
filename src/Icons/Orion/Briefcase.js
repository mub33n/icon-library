import React from 'react';

export default function Briefcase(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M22 17.1V13a8 8 0 018-8h4a8 8 0 018 8v3.9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M36 43h26V21a4 4 0 00-4-4H6a4 4 0 00-4 4v22h26m32 0v16H4V43" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 39h8v8h-8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
