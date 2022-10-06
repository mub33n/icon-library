import React from 'react';

export default function Newspaper(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M56 54H8a6 6 0 01-6-6V10h48v8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M62 18v30a6 6 0 01-6 6 6 6 0 01-6-6V18z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 18h32m-32 8h14v16H10zm22 0h10m-10 8h10m-10 8h10" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
