import React from 'react';

export default function Mailbox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M24 42v18m34-26v8H40V17a9 9 0 019-9 9 9 0 019 9v1M30 8h19m-9 34H2V17a9 9 0 019-9h9" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M59.1 34H48V18h13.8l-2.7 16zM20 2h10v8H20zm10 8v8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
