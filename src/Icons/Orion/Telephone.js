import React from 'react';

export default function Telephone(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M15 25a3.9 3.9 0 003-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 00-2-13.2C53.5 7.3 43.1 5 32 5S10.5 7.3 5.3 12.4a11.2 11.2 0 00-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M56 59V49a22 22 0 00-22-22h-4A22 22 0 008 49v10z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={43} r={8} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M26 21v6.4M38 21v6.4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
