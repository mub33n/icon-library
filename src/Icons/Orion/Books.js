import React from 'react';

export default function Books(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M42 14h20M22 58V46" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M42 2v36H7c-2.8 0-5 1.2-5 4s2.2 4 5 4h33v-8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M2 42V7a5 5 0 015-5h35" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M62 14v40H27c-2.8 0-5 1.2-5 4s2.2 4 5 4h33v-8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
