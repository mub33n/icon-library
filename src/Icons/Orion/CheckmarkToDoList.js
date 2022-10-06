import React from 'react';

export default function CheckmarkToDoList(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M22 14.9h40m-40 18h40m-40 18h40" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 14.9l4 4 4.8-7.9M2 32.9l4 4 4.8-7.9M2 50.9l4 4 4.8-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
