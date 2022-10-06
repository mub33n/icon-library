import React from 'react';

export default function Documentation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M62 24H10a8 8 0 01-8-8 8 8 0 018-8h52M14 40h-4a8 8 0 01-8-8 8 8 0 018-8m52 16H28m34 16H10a8 8 0 01-8-8 8 8 0 018-8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 50l-7-6-7 6V32h14v18zm0-18h4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
