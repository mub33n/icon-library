import React from 'react';

export default function PostBox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M14 52h36v10H14zm3 0V14m30 38V14" strokeWidth={4} strokeMiterlimit={10} stroke="#202020" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M25.736 23h13M24 32h16v14H24z" strokeWidth={4} strokeMiterlimit={10} stroke="#202020" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="#202020" fill="none" d="M51 9a29.283 29.283 0 00-38 0l1.992 5H49z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
