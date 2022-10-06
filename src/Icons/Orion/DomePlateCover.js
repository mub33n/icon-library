import React from 'react';

export default function DomePlateCover(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M6 45v-2a26 26 0 0152 0v2M28.6 17.1a4 4 0 116.7.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 45h60m-2 0l-2 5a4.2 4.2 0 01-4 3H10c-1.7 0-3.2-1.3-4-3l-2-5" />
    </svg>
  );
}
