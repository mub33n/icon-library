import React from 'react';

export default function MessageBubble(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 8H22a20 20 0 000 40h2v10l12-10h6a20 20 0 000-40z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M18 18h28M18 28h28M18 38h16" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
