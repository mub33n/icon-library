import React from 'react';

export default function Stretch(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M25.879 33.879L14 45.758V41a3 3 0 00-6 0v15h15a3 3 0 000-6h-4.758l11.88-11.879a3 3 0 00-4.243-4.242z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M41 8a3 3 0 000 6h4.758l-11.88 11.879a3 3 0 104.243 4.242L50 18.243V23a3 3 0 006 0V8z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
