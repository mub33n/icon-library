import React from 'react';

export default function SignalBars(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M38 55H26V25h12M26 55H14V33h12M14 55H2V41h12" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M50 9h12v46H50zm0 46H38V17h12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
