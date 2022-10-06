import React from 'react';

export default function NewMessage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M51.834 21.998A12.082 12.082 0 0152 24v26a12 12 0 01-12 12H14A12 12 0 012 50V24a12 12 0 0112-12h26a12.115 12.115 0 012.001.166" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={52} cy={12} r={10} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
