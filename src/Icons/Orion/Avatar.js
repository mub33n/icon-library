import React from 'react';

export default function Avatar(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24 40.8V44c0 2-1 5.2-11 7A13.4 13.4 0 002 62h60a15.5 15.5 0 00-12-11c-10-1.9-10-5-10-7v-3.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M46 25.6c0 10-6.3 18.4-14 18.4s-14-8-14-18v-9.6C18 6 25.4 2 32 2s14 3.6 14 14z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
