import React from 'react';

export default function LocationMarker(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M31 62c0-17.1 16.3-25.2 17.8-39.7A18 18 0 1013 20a17.7 17.7 0 00.2 2.2C14.7 36.8 31 44.9 31 62z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
