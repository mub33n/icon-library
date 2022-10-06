import React from 'react';

export default function EditEntry(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 10h30" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M32 56H10a8 8 0 01-8-8V10" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M42 2H10a8 8 0 000 16h32v25" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M55 30L34.2 50.7 29.8 62l11.4-4.3L62 37l-7-7zM34.2 50.7l7 7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
