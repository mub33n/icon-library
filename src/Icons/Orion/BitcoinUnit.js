import React from 'react';

export default function BitcoinUnit(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M26 31h7a4.5 4.5 0 004.7-4.4 4.6 4.6 0 00-4.6-4.6H26v20h8a4.7 4.7 0 005-5 5.8 5.8 0 00-6-6m-5-9v-4m6 4v-4m-6 28v-4m6 4v-4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M54 32a8 8 0 018-8V14H2v10a8 8 0 110 16v10h60V40a8 8 0 01-8-8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
