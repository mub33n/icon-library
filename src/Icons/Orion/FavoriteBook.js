import React from 'react';

export default function FavoriteBook(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 10h32" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M54 2H18a8 8 0 000 16h36v44H18a8 8 0 01-8-8V10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 44.8l-7.4 5.5 2.8-8.8L20 36h9.2l2.8-8.6 2.8 8.6H44l-7.4 5.5 2.8 8.8-7.4-5.5z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
