import React from 'react';

export default function MapPin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 2a20 20 0 00-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0032 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
