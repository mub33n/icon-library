import React from 'react';

export default function WebLink(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 22h10a10 10 0 0110 10 10 10 0 01-10 10H36a10 10 0 01-10-10 10 10 0 01.2-2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M22 42H12A10 10 0 012 32a10 10 0 0110-10h16a10 10 0 0110 10 10 10 0 01-.2 2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
