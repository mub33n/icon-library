import React from 'react';

export default function PostalBox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M62 56H2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M26 18H12m-2 8h18v16H10z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M36 62V15A13 13 0 0149 2a13 13 0 0113 13v47" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 62V15A13 13 0 0115 2h34" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
