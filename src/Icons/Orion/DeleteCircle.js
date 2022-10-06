import React from 'react';

export default function DeleteCircle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx="32.001" cy={32} r={30} transform="rotate(-45 32.001 32)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M42.999 21.001l-22 22m22 0L21 21" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
