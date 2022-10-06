import React from 'react';

export default function ContactCard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M52 10v1a5 5 0 01-10 0v-1H22v1a5 5 0 11-10 0v-1H2v44h60V10z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M38 26h16m-16 8h16m-16 8h8" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={20} cy={28} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M20 34a10.1 10.1 0 00-10 10.3V46h20v-1.7A10.1 10.1 0 0020 34z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
