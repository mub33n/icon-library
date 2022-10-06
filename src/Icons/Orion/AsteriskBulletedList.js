import React from 'react';

export default function AsteriskBulletedList(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 13h10m-7.5 4.3l5-8.6m0 8.6l-5-8.6M2 31h10m-7.5 4.3l5-8.6m0 8.6l-5-8.6M2 49h10m-7.5 4.3l5-8.6m0 8.6l-5-8.6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 13h40M22 31h40M22 49h40" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
