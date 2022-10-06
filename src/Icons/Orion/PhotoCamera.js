import React from 'react';

export default function PhotoCamera(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M55 17v-6h-9v6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M5 17h2.4L14 9h16l6.6 8H59a3 3 0 013 3v30a3 3 0 01-3 3H5a3 3 0 01-3-3V20a3 3 0 013-3z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={46} cy={37} r={8} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 27h20v18H10z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={46} cy={37} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
