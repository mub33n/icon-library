import React from 'react';

export default function Pill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M54.044 9.956a10.068 10.068 0 00-14.222 0l-4.978 4.978" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M21.333 21.333L6.4 36.267a15.129 15.129 0 000 21.333 15.129 15.129 0 0021.333 0l14.934-14.933" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M57.6 6.4a15.129 15.129 0 00-21.333 0L21.333 21.333l21.334 21.334L57.6 27.733a15.129 15.129 0 000-21.333z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
