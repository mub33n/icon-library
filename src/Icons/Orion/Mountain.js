import React from 'react';

export default function Mountain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14.4 25L2.1 47h40L31.9 29m16.2 18h14l-7.8-13.7" />
      <path data-name="layer1" d="M24.1 27l7.9 2-6.8-12c-1.1-2-5.1-2-6.2 0l-4.5 8 5.6 4zm20.3-2.9L41 30.2l4.3 3 3-1.5 6 1.5-5.1-9.1c-.8-1.5-3.9-1.5-4.8 0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
