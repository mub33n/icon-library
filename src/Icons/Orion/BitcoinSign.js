import React from 'react';

export default function BitcoinSign(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24 30h12a6.8 6.8 0 007-7 6.8 6.8 0 00-7-7H24v32h12.7c4.8 0 9.3-4.2 9.3-9s-5.2-9-10-9m-8-14v-4m6 4v-4m-6 40v-4m6 4v-4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" r={30} />
    </svg>
  );
}
