import React from 'react';

export default function Windsock(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M26 3.4v28m18-18.2V29" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 62h16m-8 0V2C15.2 2 24.8.9 34.6 7.2S50.4 18 58 18a3.8 3.8 0 014 4c0 1.1-.3 3.4-4 4-8.8 1.7-22.2 6-48 6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
