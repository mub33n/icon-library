import React from 'react';

export default function LetterBox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M34 62V44" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M10 24H2.4l2.4 16H10" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M62 44V28a10 10 0 00-10-10H10v26z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M20 2h14v8H20zm0 24V10" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
