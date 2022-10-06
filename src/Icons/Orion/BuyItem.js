import React from 'react';

export default function BuyItem(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M55.7 33.3L58 22M6.1 22L12 52h19.2M26 2L8.1 22M38 2l18 20M2 22h60" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={46} cy={46} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" r={16} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M52 48l-6 6-6-6m6 6V38" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
