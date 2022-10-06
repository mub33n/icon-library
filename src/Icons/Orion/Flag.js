import React from 'react';

export default function Flag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M8 3.8c13.3-6.6 31.7 7.5 48 .2v30c-15.7 7.7-34.7-6.5-48 .1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 62V3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
