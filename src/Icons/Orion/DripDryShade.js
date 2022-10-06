import React from 'react';

export default function DripDryShade(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 20v24m10-24v24M22 24v20M38 8L8 38M25 8L8 25" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M8 8h48v48H8z" strokeLinejoin="round" />
    </svg>
  );
}
