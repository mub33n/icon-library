import React from 'react';

export default function Inbox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M32 2v29.2M23 23l9 8.2 9-8.2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M40 10l22 18v34H2V28l22-18m18.1 33.9L62 28M2 28l19.9 15.9" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 62l20.9-19.1c3.9-3.9 14.2-3.9 18.1 0L62 62" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
