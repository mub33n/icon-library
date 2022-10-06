import React from 'react';

export default function Outbox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M32 30.2V3m10.9 9L32 3l-10.7 9" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M50.1 18L62 28v34H2V28l12.2-10m27.9 23.9L62 28M2 28l19.9 13.9" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 62l20.9-21.1c3.9-3.9 14.2-3.9 18.1 0L62 62" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
