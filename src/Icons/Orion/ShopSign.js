import React from 'react';

export default function ShopSign(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 29.9L22 6l26 12.5" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M61.9 40.4a3 3 0 01-2.1 3.7l-48 13.8a3 3 0 01-3.7-2.1l-6-21.1A3 3 0 014.2 31l48-13.8a3 3 0 013.7 2.1z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
