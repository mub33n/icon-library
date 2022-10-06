import React from 'react';

export default function IndentLeftMargin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 60H34m18-8H34m26-16H34m18-16H34M60 4H34m28 40H34m28-16H34m28-16H34" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M26 2v60M2 32h16m-6-6l6 6-6 6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
