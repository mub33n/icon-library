import React from 'react';

export default function Crop(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 28v28h42v-8H14V28" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 20v-6H6v6m38 28V20H2v8h34v20m0 8v6h8v-6m-30-8L62 2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
