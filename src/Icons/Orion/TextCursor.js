import React from 'react';

export default function TextCursor(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 19h60v24H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M40.8 9a5.2 5.2 0 015.2 5.2v35.6a5.2 5.2 0 01-5.2 5.2m5.2-5.2a5.2 5.2 0 005.2 5.2m0-46a5.2 5.2 0 00-5.2 5.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
