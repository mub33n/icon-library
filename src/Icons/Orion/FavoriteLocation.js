import React from 'react';

export default function FavoriteLocation(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M32 62c0-17.1 16.3-25.2 17.8-39.7A18 18 0 1014 20a18.5 18.5 0 00.2 2.2C15.7 36.8 32 44.9 32 62z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M32 25.2l-6.2 4.5 2.4-7.3L22 18h7.7l2.3-7.3 2.4 7.3H42l-6.2 4.4 2.4 7.3-6.2-4.5z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
