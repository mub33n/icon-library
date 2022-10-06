import React from 'react';

export default function Journal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24 51.9a8 8 0 018 8v-44a8 8 0 00-8-8H2v44zm8-36a8 8 0 018-8h22v44H40a8 8 0 00-8 8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 17.9h14m-14 8h14m-14 8h14m-14 8h14m16-24h14m-14 8h14m-14 8h14m-14 8h14" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
