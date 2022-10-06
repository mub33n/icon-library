import React from 'react';

export default function FavoriteMapPin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M54 24a22 22 0 10-28 21.1L32 59l6-13.9A22 22 0 0054 24z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 28.7l-7.4 5.4 2.8-8.7L20 20h9.2l2.8-8.7 2.8 8.7H44l-7.4 5.4 2.8 8.7-7.4-5.4z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
