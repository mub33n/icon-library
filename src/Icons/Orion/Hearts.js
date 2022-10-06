import React from 'react';

export default function Hearts(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46.7 29.3A24.5 24.5 0 0050 17.2 12.1 12.1 0 0038 5a12.9 12.9 0 00-12 8.1A12.9 12.9 0 0014 5 12.1 12.1 0 002 17.2c0 11.4 8.8 22 24 31.8l3.7-2.5" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M53 27a9.7 9.7 0 00-9 5.9 9.7 9.7 0 00-9-5.9 8.9 8.9 0 00-9 8.9c0 8.3 6.6 16 18 23.1 11.4-7.1 18-14.8 18-23.1a8.9 8.9 0 00-9-8.9z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
