import React from 'react';

export default function AddressBook(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 10h32" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M54 2H18a8 8 0 100 16h36v44H18a8 8 0 01-8-8V10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M25.3 45c3.3-.7 3.3-1.9 3.3-2.7v-1.2a7.9 7.9 0 01-2.6-5.8v-3.7c0-3.7 3.4-5.6 6-5.6s6 1.9 6 5.6v3.7a7.9 7.9 0 01-2.7 5.7v1.2c0 .8 0 2 3.5 2.7S42 50 42 50H22s0-4.3 3.3-5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
