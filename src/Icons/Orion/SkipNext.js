import React from 'react';

export default function SkipNext(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 27.9l-10-6.8v21.8l10-6.8v6.8L44 32v-.1L28 21.1v6.8z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46 20v24" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
