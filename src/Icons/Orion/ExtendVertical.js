import React from 'react';

export default function ExtendVertical(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M26 25l3-3v20l-4-4-3.992 4.477L32 54l10-11-4-4-3 3V22l3 3 4-4-10-11-11 11 5 4z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 56h36v6H14zm0-54h36v6H14z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
