import React from 'react';

export default function LineDryShade(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M38 8L8 38M25 8L8 25M56 8a29.8 29.8 0 01-24 12 30.2 30.2 0 01-5.5-.5" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M8 8h48v48H8z" strokeLinejoin="round" />
    </svg>
  );
}
