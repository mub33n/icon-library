import React from 'react';

export default function MoreIndent(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M50 4H2m36 8H2m36 40H2m48 8H2m36-40H2m36 8H2m36 8H2m36 8H2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M48 18l14 14-14 14" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
