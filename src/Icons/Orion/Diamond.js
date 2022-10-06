import React from 'react';

export default function Diamond(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 22h60M16 6l16 16L48 6M32 22v36" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M48 6l14 16-30 36L2 22 16 6h32z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
