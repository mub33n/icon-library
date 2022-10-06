import React from 'react';

export default function HorizontalTextScale(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 8V2h36v6M32 2v44m-10 0h20" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M4 56h56m-50 6l-6-6 6-6m44 12l6-6-6-6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
