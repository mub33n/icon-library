import React from 'react';

export default function IdCard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M30 46.9c-4-.9-4-2.3-4-3.3v-1.5a9.3 9.3 0 002.9-6.9v-4.5A6.8 6.8 0 0022 24a6.8 6.8 0 00-7 6.7v4.5a9.3 9.3 0 003 6.9v1.5c0 .9 0 2.4-4.2 3.3S10 52 10 52h24a5.1 5.1 0 00-4-5.1z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M36 10h26v50H2V10h26" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 4h8v12h-8z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M38 24h16m-16 8h10m-10 8h14" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
