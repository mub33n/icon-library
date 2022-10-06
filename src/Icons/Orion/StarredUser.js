import React from 'react';

export default function StarredUser(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M39.8 51H2s0-7 9.4-8.8S20 38.6 20 37v-2a14.2 14.2 0 01-4-7c-2.5 0-4-3-4-6 0-.8 0-4 2-4-1.6-6.4-.4-13 4-13 10.4-7 25-1.5 20 13 2 0 2 3.2 2 4 0 3-1.5 6-4 6a14.1 14.1 0 01-4 7v2c0 1.1.5 3 3.9 4l6.8 1.7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 54.9L36.1 62l3.8-11.5L30 44h12.2L46 32l3.8 12H62l-9.9 6.5L55.9 62 46 54.9z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
