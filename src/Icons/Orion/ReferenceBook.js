import React from 'react';

export default function ReferenceBook(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M15 20.4V58c0 4 5.5 5.2 10 2.6l26-16.5V4.7L23 22.3c-4.1 2.4-12.4-1-5.2-5.4L21 15 41.1 2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M25 28.9V52" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
