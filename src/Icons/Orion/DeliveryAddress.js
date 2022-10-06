import React from 'react';

export default function DeliveryAddress(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M56.4 29.7L58 22M6.1 22L12 52h30.1M26 2L8.1 22M38 2l18 20M2 22h60" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M61.9 41.5A12.2 12.2 0 0062 40a12 12 0 10-24 0 12.2 12.2 0 00.1 1.5C39.2 51.4 50 62 50 62s10.8-10.6 11.9-20.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={50} cy={40} r={2} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
