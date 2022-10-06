import React from 'react';

export default function Image(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={17} cy={15} r={5} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M8 46c0-2.8 6.6-16 13.3-16s6.1 6 8.7 6 4.6-18 12-18 14 25.8 14 28" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 46h60M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
