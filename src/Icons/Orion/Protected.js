import React from 'react';

export default function Protected(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M19 30.3v-15a13 13 0 0113-13 13 13 0 0113 13v15" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M23 30.3v-15a9 9 0 0118 0v15" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M10 29.8h44v32H10z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M34 48.7a2 2 0 01-2 2 2 2 0 01-2-2v-6a2 2 0 012-2 2 2 0 012 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
