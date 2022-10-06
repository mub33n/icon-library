import React from 'react';

export default function MoveVertical(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M29 35v13.6l-2.8-3.1a3 3 0 00-4.5 4L32 61l10.2-11.5a3 3 0 00-4.5-4L35 48.6V35m0-6V15.4l2.8 3.1a3 3 0 104.5-4L32 3 21.8 14.5a3 3 0 004.5 4l2.7-3.1V29" data-name="layer2" strokeLinejoin="round" />
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M58 35H6a3 3 0 110-6h52a3 3 0 110 6z" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
