import React from 'react';

export default function VerticalTextScale(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 15V9h40v6M42 9v50m-8 0h16" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 5v56M2 11l6-6 6 6M2 55l6 6 6-6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
