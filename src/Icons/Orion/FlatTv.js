import React from 'react';

export default function FlatTv(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 58V46m8 12V46M14 58h36M2 6h60v40H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 10h52v31.99H6z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
