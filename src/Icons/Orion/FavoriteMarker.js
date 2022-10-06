import React from 'react';

export default function FavoriteMarker(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M55.9 28.3c.1-.8.1-1.5.1-2.3a24 24 0 00-48 0c0 .8 0 1.6.1 2.3v.3C10.1 47.6 32 61 32 61s21.9-13.6 23.8-32.3z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 32.1l-8.7 6.4 3.4-10.2L18 22h10.7L32 11.8 35.3 22H46l-8.7 6.3 3.4 10.2-8.7-6.4z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
