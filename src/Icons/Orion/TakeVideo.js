import React from 'react';

export default function TakeVideo(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={30} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M40 40.7a1.3 1.3 0 01-1.3 1.3H17.3a1.3 1.3 0 01-1.3-1.3V23.3a1.3 1.3 0 011.3-1.3h21.4a1.3 1.3 0 011.3 1.3zM50 23v18l-10-6v-6l10-6z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
